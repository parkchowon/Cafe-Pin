import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoffeeBean from '../../components/common/Icon/CoffeeBean';
import CoffeeBeanLight from '../../components/common/Icon/CoffeeBeanLight/CoffeeBeanLight';
import category from '../../../src/apis/category.json';
// import supabase from '../../apis/supabase';
import { INITIAL_SWITCH_HASHTAG_ONOFF, SWITCH_HASHTAG_ONOFF } from '../../redux/slices/hashtagSlice';
import {
  Container,
  SectionTitle,
  BoardSection,
  ReviewSection,
  LocationSection,
  RatingSection,
  HashtagContainer,
  HashtagButton,
  Section,
  Input,
  ButtonContainer,
  CreateBtn
} from './WritePage.style';

function WritePage() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [hashtagStates, setHashtagStates] = useState({});

  useEffect(() => {
    const initialHashtagStates = category.reduce((acc, curr) => {
      acc[curr] = false;
      return acc;
    }, {});
    setHashtagStates(initialHashtagStates);
  }, []);

  // 별점 기능
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // 해시태그 기능
  const handleHashtagClick = (hashtag) => {
    setHashtagStates((prevStates) => ({
      ...prevStates,
      [hashtag]: !prevStates[hashtag]
    }));
  };

  // 리뷰 작성 기능
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    const selectedHashtags = Object.keys(hashtagStates).filter((hashtag) => hashtagStates[hashtag]);

    const reviewData = {
      content,
      rating,
      hashtags: selectedHashtags
    };
    console.log(reviewData);
    alert('작성 완료!');
    navigate('/');
  };

  return (
    <Container>
      <SectionTitle>리뷰 작성하기</SectionTitle>
      <BoardSection>
        <ReviewSection>
          <LocationSection>
            <CoffeeBean />
          </LocationSection>
          <div style={{ width: '50%', float: 'right' }}>
            <RatingSection>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`star ${index < rating ? 'selected' : ''}`}
                    onClick={() => handleRatingChange(index + 1)}
                  >
                    {index < rating ? <CoffeeBean size={42} /> : <CoffeeBeanLight />}
                  </span>
                ))}
              </div>
            </RatingSection>
            <HashtagContainer>
              {Object.keys(hashtagStates).map((hashtag) => (
                <HashtagButton
                  key={hashtag}
                  onClick={() => handleHashtagClick(hashtag)}
                  isActive={hashtagStates[hashtag]}
                >
                  {hashtag}
                </HashtagButton>
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
