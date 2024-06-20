import { useDispatch, useSelector } from 'react-redux';
import {
  AddressText,
  CurrentHashtagTextContainer,
  ExitIcon,
  PlainText,
  PlainTextExitIconContainer
} from './MainPageCurrentHashtagTextSection.style';
import { ViewAllRegion } from '../../redux/slices/mapSlice';

const MainPageRegionFilterTextSection = () => {
  const dispatch = useDispatch();

  const viewAll = useSelector((state) => {
    return state.map.viewAll;
  });

  const currentPositionAddress = useSelector((state) => {
    return state.map.address;
  });

  const handleClickExitRegionFilterIcon = () => {
    dispatch(ViewAllRegion());
  };

  return (
    <>
      <CurrentHashtagTextContainer>
        <AddressText>{viewAll ? '전체보기' : `${currentPositionAddress}`}</AddressText>
        <PlainTextExitIconContainer>
          <PlainText>에서 검색 중</PlainText>
          <ExitIcon src="src\components\common\Icon\ExitIcon.png" onClick={handleClickExitRegionFilterIcon} />
        </PlainTextExitIconContainer>
      </CurrentHashtagTextContainer>
    </>
  );
};

export default MainPageRegionFilterTextSection;
