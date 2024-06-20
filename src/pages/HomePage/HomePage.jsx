import { useDispatch, useSelector } from 'react-redux';
import MainPageCardArrangeDropdown from '../../components/MainPageCardArrangeDropdown';
import MainPageCardListSection from '../../components/MainPageCardListSection';
import MainPageCurrentHashtagTextSection from '../../components/MainPageCurrentHashtagTextSection';
import { MainPageHashtagDropdownContainer } from '../../components/MainPageCurrentHashtagTextSection/MainPageCurrentHashtagTextSection.style';
import MainPageHashtagSelectionSection from '../../components/MainPageHashtagSelectionSection';
import MainPageSearchSection from '../../components/MainPageSearchSection';
import { useEffect } from 'react';
import { SET_CAFE_SEARCH_TEXT } from '../../redux/slices/cafeSearchTextSlice';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SET_CAFE_SEARCH_TEXT(''));
  });
  return (
    <>
      <MainPageSearchSection />
      <MainPageHashtagSelectionSection />
      <MainPageHashtagDropdownContainer>
        <MainPageCurrentHashtagTextSection />
        <MainPageCardArrangeDropdown />
      </MainPageHashtagDropdownContainer>
      <MainPageCardListSection />
    </>
  );
}

export default HomePage;
