import { useNavigate } from 'react-router-dom';
import { AddReviewButton } from './MainPageAddReviewButton.style';

const MainPageAddReviewButton = () => {
  const navigate = useNavigate();
  return (
    <AddReviewButton
      onClick={() => {
        navigate('/select-cafe');
      }}
    >{`+ 리뷰 작성`}</AddReviewButton>
  );
};

export default MainPageAddReviewButton;
