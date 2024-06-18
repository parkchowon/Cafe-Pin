import { useState } from 'react';
import { BoardSection, ButtonContainer, CreateBtn, EditLabel, Input, Section } from './WritePage.style';

function WritePage() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      content
    });
    alert('작성 완료!');
  };

  return (
    <div>
      <h1>리뷰 작성하기</h1>
      <BoardSection>
        <Section>
          <EditLabel>내 용</EditLabel>
          <Input
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <ButtonContainer>
            <CreateBtn onClick={handleSubmit}>등 록</CreateBtn>
          </ButtonContainer>
        </Section>
      </BoardSection>
    </div>
  );
}

export default WritePage;
