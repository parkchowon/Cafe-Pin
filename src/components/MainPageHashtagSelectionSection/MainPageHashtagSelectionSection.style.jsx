import styled from 'styled-components';

export const HashtagSelectionSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 20px auto 0px auto;

  &:hover {
    cursor: pointer;
  }
`;

export const HashtagSelectionItem = styled.div`
  padding: 5px 25px;
  border-width: 2.25pt;
  border-style: solid;
  border-color: #4d2c0e;
  border-radius: 60px;
  color: #4d2c0e;
  font-weight: 700;

  background-color: ${({ $onOff }) => {
    return $onOff == true ? '#4d2c0e' : 'none';
  }};

  color: ${({ $onOff }) => {
    return $onOff == true ? 'white' : '#4d2c0e';
  }};

  transition: 0.3s;

  &:hover {
    background-color: ${({ $onOff }) => {
      return $onOff == true ? '#4d2c0e' : '#dbc5b1;';
    }};
  }
`;
