import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router에서 useNavigate 가져오기
import supabase from '../../apis/supabase';
import CoffeeBean from '../common/Icon/CoffeeBean/CoffeeBean';
import GreyCoffeeBean from '../common/Icon/GreyCoffeeBean';

import {
  ReviewsSection,
  ReviewsHeader,
  Reviews,
  Review,
  ReviewDetails,
  ReviewContent,
  ReviewRating,
  ReviewDate,
  Rating,
  NoReviewsMessage, // NoReviewsMessage 스타일 추가
} from './MyPageCardListSection.style';

const MyPageCardListSection = ({ userId }) => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchUserReviews();
    }
  }, [userId]);

  const fetchUserReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, cafe_name, content, rating, created_at') // id 필드 추가
        .eq('user_id', userId);

      if (error) {
        console.error('리뷰를 가져오는데에 실패했습니다:', error.message);
        return;
      }

      if (data) {
        setReviews(data);
      }
    } catch (error) {
      console.error('리뷰를 가져오는 중 오류가 발생했습니다:', error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('ko-KR', options);
  };

  const handleReviewClick = (reviewId) => {
    navigate(`/post/${reviewId}`); // 리뷰 클릭 시 해당 리뷰의 상세 페이지로 이동
  };

  return (
    <ReviewsSection>
      <ReviewsHeader>내가 작성한 리뷰</ReviewsHeader>
      {reviews.length > 0 ? (
        <Reviews>
          {reviews.map((review, index) => (
            <Review key={index} onClick={() => handleReviewClick(review.id)}> {/* 리뷰 클릭 시 handleReviewClick 호출 */}
              <ReviewRating>
                <Rating>
                  <ReviewDate>{formatDate(review.created_at)}</ReviewDate>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <CoffeeBean key={i} size={30} />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <GreyCoffeeBean key={i} size={30} />
                  ))}
                </Rating>
              </ReviewRating>
              <ReviewDetails>
                <div>{review.cafe_name}</div>
              </ReviewDetails>
              <ReviewContent>{review.content}</ReviewContent>
            </Review>
          ))}
        </Reviews>
      ) : (
        <NoReviewsMessage>아직 내가 작성한 리뷰가 없습니다</NoReviewsMessage>
      )}
    </ReviewsSection>
  );
};

export default MyPageCardListSection;
