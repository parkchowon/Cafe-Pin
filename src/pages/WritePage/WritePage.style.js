import styled from 'styled-components';

export const BoardSection = styled.div`
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 4px;
  transition: all 0.3s ease;

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
  padding: 10px;
  font-size: 16px;
  border: none; 
  border-radius: 20px; 
  outline: none;
  background-color: #EFEFEF;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreateBtn = styled.button`
background-color: #4D2C0E;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;