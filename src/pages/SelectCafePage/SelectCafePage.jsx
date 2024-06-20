import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { changeCenter, searchThisText } from '../../redux/slices/mapSlice';
import { SearchDiv, TitleDiv, Wrapper } from './SelectCafePage.style';

function SelectCafePage() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.map.position);
  const level = useSelector((state) => state.map.level);
  const cafeData = useSelector((state) => state.map.selectedCafeData);

  //내 위치를 불러와주는 함수
  const handleLocationClick = () => {
    //내 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch(
          changeCenter({
            level: level,
            position: {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            }
          })
        );
      });
    }
  };

  //검색한 결과를 저장
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  //검색한 결과 보내기
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchThisText(searchText));
  };

  //마커로 표시된 위치의 카페 정보 저장
  const handleSelectCafe = () => {
    if (cafeData.category_group_code !== 'CE7') return alert('선택하신 장소가 카페가 아닙니다. 다시 시도해주세요');
    console.log(cafeData);
    navigate('/write');
  };

  return (
    <Wrapper>
      <TitleDiv>
        <p>리뷰하실 카페를 찾아주세요!</p>
      </TitleDiv>
      <SearchDiv>
        <button onClick={handleLocationClick}>내 위치 찾기</button>
        <form onSubmit={handleSearchSubmit}>
          <input onChange={handleSearchInput} />
          <button>검색</button>
        </form>
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
      <button onClick={handleSelectCafe}>현재 표시된 장소를 선택</button>
    </Wrapper>
  );
}

export default SelectCafePage;
