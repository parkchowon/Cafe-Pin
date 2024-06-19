import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { changeCenter, searchThisText } from '../../redux/slices/mapSlice';
import { MyLocationBtn, SearchDiv, SearchInput, SettingBtn, Wrapper } from './MapSearchPage.style';

function MapSearchPage() {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.map.position);
  const level = useSelector((state) => state.map.level);
  const cafeList = useSelector((state) => state.map.cafeList);

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

  //주변 카페 리스트 저장
  const handleSetLocationClick = () => {
    console.log(cafeList);
  };

  return (
    <Wrapper>
      <SearchDiv>
        <MyLocationBtn onClick={handleLocationClick}>내 위치 중심</MyLocationBtn>
        <form onSubmit={handleSearchSubmit}>
          <SearchInput onChange={handleSearchInput} value={searchText} /> <button>검색</button>
        </form>
      </SearchDiv>
      <KaKaoMap x={location.lat} y={location.lng} width={1200} height={600} draggable={true} radius={true} />
      <SettingBtn onClick={handleSetLocationClick}>설정</SettingBtn>
    </Wrapper>
  );
}

export default MapSearchPage;
