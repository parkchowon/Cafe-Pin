import {
  CardHashtagItem,
  CardHashtagSection,
  CardReviewText,
  CardTargetCafe,
  CardTargetCafeAddress,
  MainPageCardContainer,
  MainPageCardItem
} from './MainPageCardListSection.style';

const MainPageCardListSection = () => {
  const sampleText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio similique ab aliquid quae suscipit libero
          tempore sequi dolores nostrum veniam eligendi praesentium, minima aliquam mollitia perspiciatis sapiente,
          consequatur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio similique ab
          aliquid quae suscipit libero tempore sequi dolores nostrum veniam eligendi praesentium, minima aliquam
          mollitia perspiciatis sapiente, consequatur voluptatibus.`;

  return (
    <MainPageCardContainer>
      <MainPageCardItem>
        <div style={{ display: 'flex', margin: '35px 0px 10px 30px', gap: `15px`, alignItems: 'baseline' }}>
          <CardTargetCafe>100 sheets</CardTargetCafe>
          <CardTargetCafeAddress>대전광역시 중구 대흥동</CardTargetCafeAddress>
        </div>
        <CardHashtagSection>
          <CardHashtagItem>디저트 맛집</CardHashtagItem>
          <CardHashtagItem>데이트 명소</CardHashtagItem>
        </CardHashtagSection>
        <CardReviewText>{sampleText}</CardReviewText>
      </MainPageCardItem>
      <MainPageCardItem>
        <div style={{ display: 'flex', margin: '35px 0px 10px 30px', gap: `15px`, alignItems: 'baseline' }}>
          <CardTargetCafe>100 sheets</CardTargetCafe>
          <CardTargetCafeAddress>대전광역시 중구 대흥동</CardTargetCafeAddress>
        </div>
        <CardHashtagSection>
          <CardHashtagItem>디저트 맛집</CardHashtagItem>
          <CardHashtagItem>데이트 명소</CardHashtagItem>
        </CardHashtagSection>
        <CardReviewText>{sampleText}</CardReviewText>
      </MainPageCardItem>
      <MainPageCardItem>
        <div style={{ display: 'flex', margin: '35px 0px 10px 30px', gap: `15px`, alignItems: 'baseline' }}>
          <CardTargetCafe>100 sheets</CardTargetCafe>
          <CardTargetCafeAddress>대전광역시 중구 대흥동</CardTargetCafeAddress>
        </div>
        <CardHashtagSection>
          <CardHashtagItem>디저트 맛집</CardHashtagItem>
          <CardHashtagItem>데이트 명소</CardHashtagItem>
        </CardHashtagSection>
        <CardReviewText>{sampleText}</CardReviewText>
      </MainPageCardItem>
    </MainPageCardContainer>
  );
};

export default MainPageCardListSection;
