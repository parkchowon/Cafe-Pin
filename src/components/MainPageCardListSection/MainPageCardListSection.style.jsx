import styled from 'styled-components';

export const MainPageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 30px auto 50px auto;
  gap: 35px;
`;

export const MainPageCardItem = styled.div`
  width: 100%;
  height: 190px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 23.5px;
  border-radius: 25px;
`;

export const CardTopSection = styled.div`
  display: flex;
  margin: 35px 0px 10px 30px;
  gap: 15px;
  align-items: baseline;
`;

export const CardTargetCafe = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4d2c0e;
`;

export const CardTargetCafeAddress = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: #5d442c;
`;

export const CardHashtagSection = styled.section`
  display: flex;
  margin: 10px auto auto 28px;
  gap: 10px;
`;

export const CardHashtagItem = styled.div`
  border-width: 2.25pt;
  border-color: #dbc5b1;
  border-style: solid;
  background-color: #dbc5b1;
  padding: 3px 13px;
  border-radius: 19px;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const CardReviewText = styled.p`
  margin: 20px 30px auto 35px;

  text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 42px;
  line-height: 120%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
