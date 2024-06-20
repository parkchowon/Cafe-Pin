import { useSelector } from 'react-redux';
import MainPageCardArrangeDropdown from '../../components/MainPageCardArrangeDropdown';
import MainPageCardListSection from '../../components/MainPageCardListSection';
import MainPageCurrentHashtagTextSection from '../../components/MainPageCurrentHashtagTextSection';
import { MainPageHashtagDropdownContainer } from '../../components/MainPageCurrentHashtagTextSection/MainPageCurrentHashtagTextSection.style';
import MainPageHashtagSelectionSection from '../../components/MainPageHashtagSelectionSection';
import MainPageSearchSection from '../../components/MainPageSearchSection';
import { useEffect } from 'react';

function HomePage() {
  const aaa = useSelector((state) => {
    return state.isLoggedIn.isLoggedIn;
  });
  useEffect(() => {
    console.log(aaa);
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
