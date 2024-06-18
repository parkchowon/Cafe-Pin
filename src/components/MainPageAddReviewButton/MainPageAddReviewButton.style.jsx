import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin-left: auto;
  font-weight: 600;
  font-size: 1rem;
  padding: 5px 20px;
  border-width: 2.25pt;
  border-style: solid;
  border-radius: 60px;
  transition: 0.3s;

  background-color: #dbc5b1;
  border-color: #dbc5b1;
  color: #4d2c0e;

  &:hover {
    cursor: pointer;
    transition: 0.3s;

    border-color: #4d2c0e;
    background-color: #4d2c0e;
    color: white;
  }
`;
