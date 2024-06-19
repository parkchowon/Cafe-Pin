/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import { CafeSearchInputSection, MapIcon, SearchIcon } from './MainPageSearchSection.style';
import MainPageAddReviewButton from '../MainPageAddReviewButton';

const MainPageSearchSection = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
      <MapIcon
        onClick={() => {
          navigate('/search');
        }}
      />
      <CafeSearchInputSection>
        <input placeholder="리뷰를 알고 싶은 카페를 검색!" />
        <SearchIcon src="src/components/common/Icon/SearchIcon.png" />
      </CafeSearchInputSection>
      <MainPageAddReviewButton></MainPageAddReviewButton>
    </div>
  );
};

export default MainPageSearchSection;
