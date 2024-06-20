import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchReviewItem } from '../../apis/postPage.api';
import { ErrorDiv, LoadingDiv } from '../../components/MainPageCardListSection/MainPageCardListSection.style';
import {
  ReviewContentsContainer,
  PostPageReviewArea,
  PostPageTitleText,
  ReviewRightSection,
  ReviewCafeName,
  CafeNameAndRatingContainer,
  RatingSection,
  ReviewHashtagSection,
  ReviewHashtagItem,
  UserNickname,
  UserInfoContainer,
  UserProfilePicture,
  ReviewText
} from './PostPage.style';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { useDispatch } from 'react-redux';
import { changeCenter } from '../../redux/slices/mapSlice';
import GreyCoffeeBean from '../../components/common/Icon/GreyCoffeeBean';
import CoffeeBean from '../../components/common/Icon/CoffeeBean/CoffeeBean';

function PostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const {
    data: fetchedReviewItem,
    isPending,
    isError
  } = useQuery({
    queryKey: ['fetchPostItem', postId],
    queryFn: () => fetchReviewItem(postId)
  });

  if (isPending) {
    return <LoadingDiv>로딩 중...</LoadingDiv>;
  } else if (isError) {
    return <ErrorDiv>오류 발생</ErrorDiv>;
  } else {
    console.log(fetchedReviewItem);
    dispatch(
      changeCenter({
        position: {
          lat: fetchedReviewItem.post.map_x,
          lng: fetchedReviewItem.post.map_y
        }
      })
    );

    const currentReviewHashtagArray = [];
    const All_HASHTAG_ARRAY = [
      '커피 맛집',
      '디저트 맛집',
      '분위기 좋은',
      '데이트 명소',
      '공부하기 좋은',
      '단체모임 가능'
    ];

    All_HASHTAG_ARRAY.forEach((hashtag) => {
      if (fetchedReviewItem.post[hashtag]) {
        currentReviewHashtagArray.push(hashtag);
      }
    });

    return (
      <>
        <PostPageTitleText>Review</PostPageTitleText>
        <PostPageReviewArea>
          <ReviewContentsContainer>
            <KaKaoMap
              x={fetchedReviewItem.post.map_x}
              y={fetchedReviewItem.post.map_y}
              width={700}
              height={400}
              draggable={false}
              radius={false}
              clickable={false}
            />
            <ReviewRightSection>
              <CafeNameAndRatingContainer>
                <ReviewCafeName>{fetchedReviewItem.post.cafe_name}</ReviewCafeName>
                <RatingSection>
                  {Array.from({ length: 5 - fetchedReviewItem.post.rating }).map((unusedVar, i) => {
                    return (
                      <div key={i} id={i}>
                        <GreyCoffeeBean size={20} />
                      </div>
                    );
                  })}
                  {Array.from({ length: fetchedReviewItem.post.rating }).map((unusedVar, i) => {
                    return (
                      <div key={i} id={i}>
                        <CoffeeBean size={20} />
                      </div>
                    );
                  })}
                </RatingSection>
              </CafeNameAndRatingContainer>
              <ReviewHashtagSection>
                {currentReviewHashtagArray.map((hashtag) => {
                  return <ReviewHashtagItem key={hashtag}>{hashtag}</ReviewHashtagItem>;
                })}
              </ReviewHashtagSection>
              <UserInfoContainer>
                <UserProfilePicture
                  src={
                    fetchedReviewItem.user.profile_url
                      ? fetchedReviewItem.user.profile_url
                      : 'https://bqzwrfwasvnzoaeztcdv.supabase.co/storage/v1/object/public/avatars/public/default-profile.jpg'
                  }
                />
                <UserNickname> {fetchedReviewItem.user.nickname}</UserNickname>
              </UserInfoContainer>
              <ReviewText>{fetchedReviewItem.post.content}</ReviewText>
            </ReviewRightSection>
          </ReviewContentsContainer>
        </PostPageReviewArea>
      </>
    );
  }
}

export default PostPage;
