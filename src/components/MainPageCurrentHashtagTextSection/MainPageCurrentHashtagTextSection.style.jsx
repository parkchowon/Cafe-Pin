import styled from 'styled-components';

export const MainPageHashtagDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  margin: 50px auto 0px auto;
  align-items: flex-start;
  position: relative;
  z-index: 2;
`;

export const CurrentHashtagTextContainer = styled.section`
  display: grid;
  justify-content: start;

  min-width: 350px;

  @media (min-width: 1790px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    font-size: 1.7rem;
  }

  @media (max-width: 1790px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    font-size: 1.7rem;
  }

  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    font-size: 1.4rem;
  }
  @media (max-width: 895px) {
    display: none;
  }
`;

export const CurrentHashtagTextItem = styled.p`
  font-weight: 900;

  color: #4d2c0e;
  margin: 10px 0 0 0;
`;
