import { useState } from 'react';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { MyLocationBtn, SearchDiv, SearchInput, SettingBtn, Wrapper } from './MapSearchPage.style';

function MapSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState('');
  const [mapX, setMapX] = useState(33.450701);
  const [mapY, setMapY] = useState(126.570667);

  //내 위치를 불러와주는 함수
  const handleLocationClick = () => {};

  //검색한 결과를 저장
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  //결과 전송..
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setData(searchText);
  };

  return (
    <Wrapper>
      <SearchDiv>
        <MyLocationBtn onClick={handleLocationClick}>내 위치 중심</MyLocationBtn>
        <form onSubmit={handleSearchSubmit}>
          <SearchInput onChange={handleSearchInput} /> <button>검색</button>
        </form>
      </SearchDiv>
      <KaKaoMap x={mapX} y={mapY} width={1200} height={600} draggable={true} searchText={data} />
      <SettingBtn>설정</SettingBtn>
    </Wrapper>
  );
}

export default MapSearchPage;
