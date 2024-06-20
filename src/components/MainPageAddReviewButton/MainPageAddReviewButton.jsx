import { useNavigate } from 'react-router-dom';
import { StyledDiv } from './MainPageAddReviewButton.style';

const MainPageAddReviewButton = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv
      onClick={() => {
        navigate('/write');
      }}
    >{`+ 리뷰 작성`}</StyledDiv>
  );
};

export default MainPageAddReviewButton;
