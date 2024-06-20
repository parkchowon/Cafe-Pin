/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import {
  CafeSearchInputSection,
  MainPageSearchSectionContainer,
  MapIcon,
  SearchIcon
} from './MainPageSearchSection.style';
import MainPageAddReviewButton from '../MainPageAddReviewButton';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_CAFE_SEARCH_TEXT } from '../../redux/slices/cafeSearchTextSlice';

const MainPageSearchSection = () => {
  const inputValueRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEnterKeyOnInput = (event) => {
    if (event.key === 'Enter') {
      console.log(inputValueRef.current.value);
      dispatch(SET_CAFE_SEARCH_TEXT(inputValueRef.current.value));
    }
  };
  return (
    <MainPageSearchSectionContainer>
      <MapIcon
        onClick={() => {
          navigate('/search');
        }}
      />
      <CafeSearchInputSection>
        <input placeholder="리뷰를 볼 카페를 검색!" onKeyDown={handleEnterKeyOnInput} ref={inputValueRef} />
        <SearchIcon src="src/components/common/Icon/SearchIcon.png" />
      </CafeSearchInputSection>
      <MainPageAddReviewButton></MainPageAddReviewButton>
    </MainPageSearchSectionContainer>
  );
};

export default MainPageSearchSection;
