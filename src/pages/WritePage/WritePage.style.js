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
  margin-top: 3rem; 
  margin-bottom: 1.5rem;
  text-align: center; 
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

export const ReviewSection = styled.div`
    display: flex;
    margin: 2rem 2rem; 
    justify-content: center;
`;

export const LocationSection = styled.div`
width: 50%;
float: left;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

export const RatingSection = styled.div`
display: flex;
justify-content: center; 
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%; 
  max-width: 500px; 
  justify-content: flex-start; 
`;

export const HashtagButton = styled.button`
  background-color: ${(props) => props.isActive ? '#DBC5B1' : '#FFFFFF'};
  color: ${(props) => props.isActive ? '#FFFFFF' : '#DBC5B1'};
  padding: 2px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border: 2px solid #DBC5B1;

  &:hover:not(.active) {
    background-color: #DBC5B1;
    color: #FFFFFF;
  }

  &.active {
    background-color: #DBC5B1;
    color: #FFFFFF;

    &:hover {
      background-color: #DBC5B1;
      color: #FFFFFF;
    }
  }
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
  text-align: left; 
`;

export const ButtonContainer = styled.div`
width: 111%;
max-width: 500px; 
  margin-top: 16px;
  display: flex;
  justify-content: flex-end; 
`;

export const CreateBtn = styled.button`
background-color: #4D2C0E;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 14px 16px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; 
  max-width: 500px; 
  font-weight: bold;

  &:hover {
    background-color: #DBC5B1;
  }
`;