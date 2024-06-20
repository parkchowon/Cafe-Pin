import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchDiv = styled.div`
  max-width: 1200px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 25px;
    font-weight: 400;
  }
`;
