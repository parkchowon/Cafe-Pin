import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh - 80px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const SearchDiv = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 30px;
`;

export const SettingBtn = styled.button`
  width: 500px;
  height: 50px;
  margin-top: 30px;
  border-radius: 50px;
`;

export const MyLocationBtn = styled.button`
  width: 120px;
`;
