import { useState } from 'react';
import { BoardSection, SectionTitle, ButtonContainer, CreateBtn, Input, Section } from './WritePage.style';
import CoffeeBeanLight from '../../components/common/Icon/CoffeeBeanLight/CoffeeBeanLight';

function WritePage() {
  const [content, setContent] = useState('');

  // 리뷰를 작성하고 등록 버튼을 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      content
    });
    alert('작성 완료!');
  };

  return (
    <BoardSection>
      <SectionTitle>리뷰 작성하기</SectionTitle>
      <CoffeeBeanLight />
      <Section>
        <Input
          type="text"
          value={content}
          placeholder="내용을 입력하세요"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <ButtonContainer>
          <CreateBtn onClick={handleSubmit}>리뷰 등록하기</CreateBtn>
        </ButtonContainer>
      </Section>
    </BoardSection>
  );
}

export default WritePage;
