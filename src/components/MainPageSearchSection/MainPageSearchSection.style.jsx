import styled from 'styled-components';

export const CafeSearchInputSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  border-width: 2.25pt;
  border-style: solid;
  border-color: #4d2c0e;
  border-radius: 60px;
  width: 50%;
  margin-top: 50px;
  margin-right: 85px;
  input {
    width: 70%;
    border-style: none;
    text-align: center;
    color: #4d2c0e;
    margin-left: auto;
    font-size: 1.1rem;
    font-weight: 700;
    &::placeholder {
      color: #dbc5b1;
    }
    &:focus {
      outline: none;
    }
  }
  img {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const MapIcon = styled.div`
  background-image: url('src/components/common/Icon/MapIcon.png');
  background-size: contain;
  width: 64px;
  height: 64px;
  margin: auto 0px 0px 0px;
  transition: 0.3s;
  &:hover {
    background-image: url('src/components/common/Icon/MapIcon_hover.png');
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const SearchIcon = styled.img`
  src: 'src/components/common/Icon/SearchIcon.png';
  &:hover {
    cursor: pointer;
  }
`;
