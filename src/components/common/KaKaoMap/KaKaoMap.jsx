import { useEffect, useState } from 'react';
import { Circle, Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { changeCenter } from '../../../redux/slices/mapSlice';
import { MapContainer } from './KaKaoMap.style';

function KaKaoMap(data) {
  useKakaoLoader();
  const dispatch = useDispatch();

  const text = useSelector((state) => state.map.searchText);
  const position = useSelector((state) => state.map.position);
  const level = useSelector((state) => state.map.level);

  const [length, setLength] = useState(500);

  //원 범위
  useEffect(() => {
    switch (level) {
      case 1:
        setLength(75);
        break;
      case 2:
        setLength(150);
        break;
      case 3:
        setLength(300);
        break;
      case 4:
        setLength(600);
        break;
      case 5:
        setLength(1200);
        break;
      case 6:
        setLength(2400);
        break;
      case 7:
        setLength(4700);
        break;
    }
  }, [level]);

  //맵에서 위치 이동
  const handleCenterClick = (map) => {
    const latlng = map.getCenter();

    const changeData = {
      level: map.getLevel(),
      position: {
        lat: latlng.getLat(),
        lng: latlng.getLng()
      }
    };
    dispatch(changeCenter(changeData));
  };

  //검색한 결과로 이동
  useEffect(() => {
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(text, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const changeData = {
          level: level,
          position: {
            lat: data[0].y,
            lng: data[0].x
          }
        };
        console.log(changeData);
        return dispatch(changeCenter(changeData));
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색결과가 존재하지 않습니다.');
        return;
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('에러가 발생했습니다. 다시 시도해주세요');
      }
    });
  }, [text]);

  return (
    <MapContainer>
      <Map
        id="map"
        center={{
          lat: `${position.lat}`,
          lng: `${position.lng}`
        }}
        style={{
          width: `${data.width}px`,
          height: `${data.height}px`
        }}
        level={3}
        draggable={data.draggable}
        onCenterChanged={handleCenterClick}
      >
        {data.radius ? (
          <Circle
            center={{
              lat: position.lat,
              lng: position.lng
            }}
            radius={length}
            fillColor={'#DBC5B1'}
            fillOpacity={0.3}
            strokeOpacity={0}
          />
        ) : (
          false
        )}
        <MapMarker
          position={{
            lat: position.lat,
            lng: position.lng
          }}
        />
      </Map>
    </MapContainer>
  );
}

export default KaKaoMap;
