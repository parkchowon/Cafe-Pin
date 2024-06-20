import { useSelector } from 'react-redux';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { SearchDiv, TitleDiv, Wrapper } from './SelectCafePage.style';

function SelectCafePage() {
  const location = useSelector((state) => state.map.position);
  return (
    <Wrapper>
      <TitleDiv>
        <p>리뷰하실 카페를 찾아주세요!</p>
      </TitleDiv>
      <SearchDiv>
        <button>내 위치 찾기</button>
        <div>
          <input />
          <button>검색</button>
        </div>
      </SearchDiv>
      <KaKaoMap
        x={location.lat}
        y={location.lng}
        width={1200}
        height={600}
        draggable={true}
        radius={false}
        clickable={true}
      />
      <button>현재 표시된 장소를 선택</button>
    </Wrapper>
  );
}

export default SelectCafePage;
