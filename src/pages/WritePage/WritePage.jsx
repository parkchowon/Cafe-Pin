import { useState } from 'react';
import CoffeeBean from '../../components/common/Icon/CoffeeBean';
import CoffeeBeanLight from '../../components/common/Icon/CoffeeBeanLight/CoffeeBeanLight';
import category from '../../apis/category.json';
import {
  Container,
  BoardSection,
  SectionTitle,
  ButtonContainer,
  CreateBtn,
  Input,
  Section,
  HashtagContainer,
  Hashtag,
  LocationSection,
  RatingSection,
  ReviewSection
} from './WritePage.style';

function WritePage() {
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    const reviewData = {
      content,
      selectedTags,
      rating
    };
    console.log(reviewData);
    alert('작성 완료!');
  };

  return (
    <Container>
      <SectionTitle>리뷰 작성하기</SectionTitle>
      <BoardSection>
        <ReviewSection>
          <LocationSection>
            <CoffeeBean />
          </LocationSection>
          <div style={{ marginLeft: '18rem', marginRight: '-1rem' }}>
            <RatingSection>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`star ${index < rating ? 'selected' : ''}`}
                    onClick={() => handleRatingChange(index + 1)}
                  >
                    {index < rating ? <CoffeeBean /> : <CoffeeBeanLight />}
                  </span>
                ))}
              </div>
            </RatingSection>
            <HashtagContainer>
              {category.map((tag, index) => (
                <Hashtag key={index} isSelected={selectedTags.includes(tag)} onClick={() => handleTagClick(tag)}>
                  {tag}
                </Hashtag>
              ))}
            </HashtagContainer>

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
          </div>
        </ReviewSection>
      </BoardSection>
    </Container>
  );
}

export default WritePage;
