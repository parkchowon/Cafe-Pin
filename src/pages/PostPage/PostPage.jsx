import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchReviewItem } from '../../apis/postPage.api';
import { ErrorDiv, LoadingDiv } from '../../components/MainPageCardListSection/MainPageCardListSection.style';

function PostPage() {
  const { post_id } = useParams();

  const {
    data: fetchedReviewItem,
    isPending,
    isError
  } = useQuery({
    queryKey: ['fetchPostItem', post_id],
    queryFn: () => fetchReviewItem(post_id)
  });

  if (isPending) {
    return <LoadingDiv>로딩 중...</LoadingDiv>;
  } else if (isError) {
    return <ErrorDiv>오류 발생</ErrorDiv>;
  } else {
    console.log(post_id);
    return <div>응애</div>;
  }
}

export default PostPage;
