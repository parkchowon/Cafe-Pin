import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SWITCH_ARRANGE_TO_LATEST, SWITCH_ARRANGE_TO_OLDEST } from '../../redux/slices/arrangeOptionSlice';
import {
  CardArrangeDropDownContainer,
  CardArrangeDropDownItem,
  CardArrangeDropDownList,
  CardArrangeDropDownTitle
} from './MainPageCardArrangeDropdown.style';
import { useQueryClient } from '@tanstack/react-query';

const MainPageCardArrangeDropdown = () => {
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const [isDropdownView, setIsDropdownView] = useState(false);

  const handleClickDropdownContainer = () => {
    setIsDropdownView(!isDropdownView);
  };

  const cardArrangeOption = useSelector((state) => {
    return state.arrangeOption.arrangeOption;
  });

  const handleClickArrangeToLatest = () => {
    queryClient.invalidateQueries(['fetchReviewsByLatest']);
    dispatch(SWITCH_ARRANGE_TO_LATEST());
  };

  const handleClickArrangeToOldest = () => {
    queryClient.invalidateQueries(['fetchReviewsByOldest']);
    dispatch(SWITCH_ARRANGE_TO_OLDEST());
  };

  return (
    <CardArrangeDropDownContainer onClick={handleClickDropdownContainer}>
      <CardArrangeDropDownTitle>
        보기 방식: {cardArrangeOption === 'latest' ? '최신순' : '오래된순'}
      </CardArrangeDropDownTitle>

      {isDropdownView && (
        <CardArrangeDropDownList $abc={isDropdownView}>
          <CardArrangeDropDownItem onClick={handleClickArrangeToLatest}>최신순</CardArrangeDropDownItem>
          <CardArrangeDropDownItem onClick={handleClickArrangeToOldest}>오래된순</CardArrangeDropDownItem>
        </CardArrangeDropDownList>
      )}
    </CardArrangeDropDownContainer>
  );
};

export default MainPageCardArrangeDropdown;
