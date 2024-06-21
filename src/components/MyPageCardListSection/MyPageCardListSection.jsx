import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  NoReviewsMessage,
  DeleteButton
} from './MyPageCardListSection.style';

const MyPageCardListSection = ({ userId }) => {
  const navigate = useNavigate();

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
        .select('id, cafe_name, content, rating, created_at')
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

  const deleteReview = async (reviewId) => {
    try {
      const confirmDelete = window.confirm('이 리뷰를 삭제하시겠습니까?');

      if (!confirmDelete) {
        return;
      }

      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId);

      if (error) {
        console.error('리뷰를 삭제하는데 실패했습니다:', error.message);
        return;
      }

      setReviews(reviews.filter((review) => review.id !== reviewId));
    } catch (error) {
      console.error('리뷰를 삭제하는 중 오류가 발생했습니다:', error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('ko-KR', options);
  };

  const handleReviewClick = (reviewId) => {
    navigate(`/post/${reviewId}`);
  };

  return (
    <ReviewsSection>
      <ReviewsHeader>내가 작성한 리뷰</ReviewsHeader>
      {reviews.length > 0 ? (
        <Reviews>
          {reviews.map((review, index) => (
            <Review key={index}>
              <div onClick={() => handleReviewClick(review.id)} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
              </div>
              <DeleteButton onClick={() => deleteReview(review.id)}>삭제</DeleteButton>
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
