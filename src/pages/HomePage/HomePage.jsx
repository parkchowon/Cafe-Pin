import MainPageAddReviewButton from '../../components/MainPageAddReviewButton';
import MainPageCardListSection from '../../components/MainPageCardListSection';
import MainPageCurrentHashtagTextSection from '../../components/MainPageCurrentHashtagTextSection';
import MainPageHashtagSelectionSection from '../../components/MainPageHashtagSelectionSection';
import MainPageSearchSection from '../../components/MainPageSearchSection';

function HomePage() {
  return (
    <>
      <MainPageSearchSection></MainPageSearchSection>
      <MainPageHashtagSelectionSection></MainPageHashtagSelectionSection>
      <div style={{ display: 'flex', width: '65%', margin: '50px auto 0px auto', alignItems: 'center' }}>
        <MainPageCurrentHashtagTextSection></MainPageCurrentHashtagTextSection>
        <MainPageAddReviewButton>리뷰 작성하기</MainPageAddReviewButton>
      </div>

      <MainPageCardListSection></MainPageCardListSection>
    </>
  );
}

export default HomePage;
