/* eslint-disable react/no-unknown-property */
import { CafeSearchInputSection, MapIcon, SearchIcon } from './MainPageSearchSection.style';

const MainPageSearchSection = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <MapIcon />
      <CafeSearchInputSection>
        <input placeholder="리뷰를 알고 싶은 카페를 검색!" />
        <SearchIcon src="src/assets/searchIcon.png"></SearchIcon>
      </CafeSearchInputSection>
    </div>
  );
};

export default MainPageSearchSection;
