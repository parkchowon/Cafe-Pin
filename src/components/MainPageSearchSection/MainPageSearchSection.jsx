/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import {
  CafeSearchInputSection,
  MainPageSearchSectionContainer,
  MapIcon,
  SearchIcon
} from './MainPageSearchSection.style';
import MainPageAddReviewButton from '../MainPageAddReviewButton';

const MainPageSearchSection = () => {
  const navigate = useNavigate();
  return (
    <MainPageSearchSectionContainer>
      <MapIcon
        onClick={() => {
          navigate('/search');
        }}
      />
      <CafeSearchInputSection>
        <input placeholder="리뷰를 볼 카페를 검색!" />
        <SearchIcon src="src/components/common/Icon/SearchIcon.png" />
      </CafeSearchInputSection>
      <MainPageAddReviewButton></MainPageAddReviewButton>
    </MainPageSearchSectionContainer>
  );
};

export default MainPageSearchSection;
