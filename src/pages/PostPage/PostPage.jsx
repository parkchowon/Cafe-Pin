import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchReviewItem } from '../../apis/postPage.api';
import { ErrorDiv, LoadingDiv } from '../../components/MainPageCardListSection/MainPageCardListSection.style';
import {
  ReviewContentsContainer,
  PostPageReviewArea,
  PostPageTitleText,
  ReviewRightSection,
  ReviewCafeName
} from './PostPage.style';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { useDispatch } from 'react-redux';
import { changeCenter } from '../../redux/slices/mapSlice';

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
          lat: fetchedReviewItem.map_x,
          lng: fetchedReviewItem.map_y
        }
      })
    );
    return (
      <>
        <PostPageTitleText>Review</PostPageTitleText>
        <PostPageReviewArea>
          <ReviewContentsContainer>
            <KaKaoMap
              x={fetchedReviewItem.map_x}
              y={fetchedReviewItem.map_y}
              width={700}
              height={400}
              draggable={false}
              radius={false}
              clickable={false}
            />
            <ReviewRightSection>
              <ReviewCafeName>{fetchedReviewItem.cafe_name}</ReviewCafeName>
            </ReviewRightSection>
          </ReviewContentsContainer>
        </PostPageReviewArea>
      </>
    );
  }
}

export default PostPage;
