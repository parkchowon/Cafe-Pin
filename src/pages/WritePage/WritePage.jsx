import { useState } from 'react';
import { BoardSection, SectionTitle, ButtonContainer, CreateBtn, Input, Section } from './WritePage.style';

function WritePage() {
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // 해시태그 선택 기능
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const tags = ['커피 맛집', '디저트 맛집', '데이트 명소', '공부하기 좋은', '단체석 보유', '분위기 좋은'];

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
      <div>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            style={{
              backgroundColor: selectedTags.includes(tag) ? '#007bff' : '#f1f1f1',
              color: selectedTags.includes(tag) ? '#fff' : '#333',
              border: 'none',
              padding: '8px 12px',
              margin: '4px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <p>Selected Tags: {selectedTags.join(', ')}</p>
      <Section>
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
  );
}

export default WritePage;
