import React, { useEffect, useState } from 'react';
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
} from './MyPageCardListSection.style';

const MyPageCardListSection = ({ userId }) => {
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
        .select('cafe_name, content, rating, created_at')
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

  return (
    <ReviewsSection>
      <ReviewsHeader>내가 작성한 리뷰</ReviewsHeader>
      <Reviews>
        {reviews.map((review, index) => (
          <Review key={index}>
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
    </ReviewsSection>
  );
};

export default MyPageCardListSection;
