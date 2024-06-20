import styled from 'styled-components';

export const MapContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const MarkerDiv = styled.div`
  min-width: 300px;
  min-height: 200px;
`;
