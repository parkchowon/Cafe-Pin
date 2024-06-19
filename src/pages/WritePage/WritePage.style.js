import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #4D2C0E;
  margin-top: 3rem; /* 여백 추가 */
  margin-bottom: 1.5rem;
  text-align: center; /* 가운데 정렬 */
`;

export const BoardSection = styled.div`
width: 800px;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
`;

export const LocationSection = styled.div`
flex-basis: 30%;
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

export const ReviewSection = styled.div`
    display: flex;
    margin: 2rem 2rem; /* 상하 2rem, 좌우 0 */
`;

export const RatingSection = styled.div`
display: flex;
justify-content: center; // 가로 중앙 정렬
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%; // 가로폭을 100%로 설정
  max-width: 500px; // 최대 가로폭을 800px로 제한
  justify-content: flex-start; // 좌측 정렬
`;

export const Hashtag = styled.button`
  background-color: ${(props) => props.isSelected ? '#DBC5B1' : '#FFFFFF'};
  color: ${(props) => props.isSelected ? '#FFFFFF' : '#DBC5B1'};
  padding: 2px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border: 2px solid #DBC5B1;

  &:hover {
    background-color: #DBC5B1;
    color: #FFFFFF;
  }

  &.selected {
    background-color: #DBC5B1;
    color: #FFFFFF;

    &:hover {
      background-color: #DBC5B1;
      color: #FFFFFF;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: none; 
  border-radius: 20px; 
  outline: none;
  background-color: #EFEFEF;
  max-width: 500px;
  padding: 18px 16px;
  height: 150px;
  text-align: left; // 텍스트 정렬을 왼쪽으로 설정
`;

export const ButtonContainer = styled.div`
width: 111%;
max-width: 500px; // Input과 동일한 최대 가로폭
  margin-top: 16px;
  display: flex;
  justify-content: flex-end; // 오른쪽 정렬
`;

export const CreateBtn = styled.button`
background-color: #4D2C0E;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; // 부모 컨테이너의 100% 사용
  max-width: 500px; // Input과 동일한 최대 가로폭

  &:hover {
    background-color: #DBC5B1;
  }
`;