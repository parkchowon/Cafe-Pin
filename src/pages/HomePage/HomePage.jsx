import MainPageCardArrangeDropdown from '../../components/MainPageCardArrangeDropdown';
import MainPageCardListSection from '../../components/MainPageCardListSection';
import MainPageCurrentHashtagTextSection from '../../components/MainPageCurrentHashtagTextSection';
import MainPageHashtagSelectionSection from '../../components/MainPageHashtagSelectionSection';
import MainPageSearchSection from '../../components/MainPageSearchSection';

function HomePage() {
  return (
    <>
      <MainPageSearchSection />
      <MainPageHashtagSelectionSection />
      <div
        style={{
          display: 'flex',
          width: '65%',
          height: '50px',
          margin: '50px auto 0px auto',
          alignItems: 'flexStart',
          position: 'relative',
          zIndex: '2'
        }}
      >
        <MainPageCurrentHashtagTextSection />
        <MainPageCardArrangeDropdown />
      </div>
      <MainPageCardListSection />
    </>
  );
}

export default HomePage;
