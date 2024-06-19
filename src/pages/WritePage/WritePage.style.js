import styled from 'styled-components';

export const BoardSection = styled.div`
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #4D2C0E;
  margin-bottom: 20px;
  text-align: center;
`;

export const TitleDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const Hashtag = styled.button`
  background-color: ${(props) => props.isSelected ? '#DBC5B1' : '#FFFFFF'};
  color: ${(props) => props.isSelected ? '#FFFFFF' : '#DBC5B1'};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
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



export const EditLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #555;
  margin-bottom: 8px;
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
  height: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
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
  width: 100%;
  max-width: 500px;

  &:hover {
    background-color: #DBC5B1;
  }
`;