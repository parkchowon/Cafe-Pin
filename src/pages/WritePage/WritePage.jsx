import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoffeeBean from '../../components/common/Icon/CoffeeBean';
import CoffeeBeanLight from '../../components/common/Icon/CoffeeBeanLight/CoffeeBeanLight';
import category from '../../../src/apis/category.json';
import { useSelector } from 'react-redux';
import supabase from '../../apis/supabase';
import { INITIAL_SWITCH_HASHTAG_ONOFF, SWITCH_HASHTAG_ONOFF } from '../../redux/slices/hashtagSlice';
import {
  Container,
  SectionTitle,
  BoardSection,
  ReviewSection,
  LocationSection,
  CafeName,
  CafeAddress,
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
  const selectedCafeData = useSelector((state) => state.map.selectedCafeData);

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
      return;
    }

    const selectedHashtags = Object.keys(hashtagStates).filter((hashtag) => hashtagStates[hashtag]);
    console.log(selectedHashtags);

    if (selectedCafeData) {
      // selectedCafeData가 정의되었는지 확인
<<<<<<< HEAD
      if (selectedHashtags.length >= 1 && selectedHashtags.length <= 5) {
        const reviewData = {
          user_id: '9131f028-7f4b-432c-aed1-575b39917150',
          content,
          rating,
          cafe_name: selectedCafeData.place_name,
          cafe_address: selectedCafeData.address_name,
          map_x: selectedCafeData.x,
          map_y: selectedCafeData.y,
          cafe_id: selectedCafeData.id,
          '커피 맛집': selectedHashtags.includes('커피 맛집'),
          '디저트 맛집': selectedHashtags.includes('디저트 맛집'),
          '분위기 좋은': selectedHashtags.includes('분위기 좋은'),
          '데이트 명소': selectedHashtags.includes('데이트 명소'),
          '공부하기 좋은': selectedHashtags.includes('공부하기 좋은'),
          '단체모임 가능': selectedHashtags.includes('단체모임 가능'),
          '해시태그 없음': false
        };
        try {
          await supabase.from('reviews').insert(reviewData);
        } catch (error) {
          console.error(error);
        }

        console.log(reviewData);
      } else {
        // 해시태그가 하나도 없을 경우
        const reviewData = {
          user_id: '9131f028-7f4b-432c-aed1-575b39917150',
          content,
          rating,
          cafe_name: selectedCafeData.place_name,
          cafe_address: selectedCafeData.address_name,
          map_x: selectedCafeData.x,
          map_y: selectedCafeData.y,
          cafe_id: selectedCafeData.id,
          '커피 맛집': selectedHashtags.includes('커피 맛집'),
          '디저트 맛집': selectedHashtags.includes('디저트 맛집'),
          '분위기 좋은': selectedHashtags.includes('분위기 좋은'),
          '데이트 명소': selectedHashtags.includes('데이트 명소'),
          '공부하기 좋은': selectedHashtags.includes('공부하기 좋은'),
          '단체모임 가능': selectedHashtags.includes('단체모임 가능'),
          '해시태그 없음': true
        };
        try {
          await supabase.from('reviews').insert(reviewData);
          alert('작성 완료!');
          navigate('/');
        } catch (error) {
          console.error(error);
        }

        console.log(reviewData);
      }
=======
      const reviewData = {
        user_id: '9131f028-7f4b-432c-aed1-575b39917150',
        content,
        rating,
        cafe_name: selectedCafeData.place_name,
        cafe_address: selectedCafeData.address_name,
        map_x: selectedCafeData.x,
        map_y: selectedCafeData.y,
        cafe_id: selectedCafeData.id,
        '커피 맛집': selectedHashtags.includes('커피 맛집'),
        '디저트 맛집': selectedHashtags.includes('디저트 맛집')
      };
      try {
        await supabase.from('reviews').insert(reviewData);
      } catch (error) {
        console.error(error);
      }

      console.log(reviewData);
>>>>>>> ab2e5bfe4cf1b1d6b42572a20eb3dffcf26a6f09
    } else {
      console.log('selectedCafeData is undefined');
    }
  };

  return (
    <Container>
      <SectionTitle>리뷰 작성하기</SectionTitle>
      <BoardSection>
        <ReviewSection>
          <LocationSection>
            <CafeName>{selectedCafeData.place_name}</CafeName>
            <CafeAddress>{selectedCafeData.address_name}</CafeAddress>
          </LocationSection>
          <div style={{ width: '50%', float: 'right', marginLeft: '4rem' }}>
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
