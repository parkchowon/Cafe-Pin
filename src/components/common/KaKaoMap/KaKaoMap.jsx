import { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { MapContainer } from './KaKaoMap.style';

function KaKaoMap(data) {
  useKakaoLoader();
  const [mapData, setMapData] = useState({ lat: data.x, lng: data.y });
  const [centerLat, setCenterLat] = useState();
  const [centerLng, setCenterLng] = useState();

  const handleCenterClick = (map) => {
    const latlng = map.getCenter();
    const lat = latlng.getLat();
    const lng = latlng.getLng();
    setCenterLat(lat);
    setCenterLng(lng);
  };

  useEffect(() => {
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(data.searchText, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setMapData({ lat: data[0].y, lng: data[0].x });
      }
    });
  }, [data.searchText]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setMapData({ lat: centerLat, lng: centerLng });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [centerLat, centerLng]);

  return (
    <MapContainer>
      <Map
        id="map"
        center={{
          lat: `${data.x}`,
          lng: `${data.y}`
        }}
        style={{
          width: `${data.width}px`,
          height: `${data.height}px`
        }}
        level={3}
        draggable={data.draggable}
        onCenterChanged={handleCenterClick}
      >
        <MapMarker
          position={{
            lat: mapData.lat,
            lng: mapData.lng
          }}
        />
      </Map>
    </MapContainer>
  );
}

export default KaKaoMap;
