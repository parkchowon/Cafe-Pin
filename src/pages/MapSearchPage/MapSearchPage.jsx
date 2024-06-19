import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { searchThisText } from '../../redux/slices/mapSlice';
import { MyLocationBtn, SearchDiv, SearchInput, SettingBtn, Wrapper } from './MapSearchPage.style';

function MapSearchPage() {
  const [searchText, setSearchText] = useState('');
  // const [data, setData] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.map.position);

  //내 위치를 불러와주는 함수
  const handleLocationClick = () => {
    //내 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
      });
    }
  };

  //검색한 결과를 저장
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  //결과 전송..
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchThisText(searchText));
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
      <SettingBtn>설정</SettingBtn>
    </Wrapper>
  );
}

export default MapSearchPage;
