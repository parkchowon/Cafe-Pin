import MainPageCardArrangeDropdown from '../../components/MainPageCardArrangeDropdown';
import MainPageCardListSection from '../../components/MainPageCardListSection';
import MainPageCurrentHashtagTextSection from '../../components/MainPageCurrentHashtagTextSection';
import { MainPageHashtagDropdownContainer } from '../../components/MainPageCurrentHashtagTextSection/MainPageCurrentHashtagTextSection.style';
import MainPageHashtagSelectionSection from '../../components/MainPageHashtagSelectionSection';
import MainPageSearchSection from '../../components/MainPageSearchSection';

function HomePage() {
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
