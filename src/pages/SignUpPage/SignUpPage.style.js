import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
`;
export const Container = styled.div`
  width: 324px;
  height: 443px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: #fff;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-family: 'Brush Script MT', cursive;
  margin-bottom: 15px;
  font-size: 36px;
`;

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  width: 324px;
  height: 443px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: 16px;
  color: #808080;
`;

export const Input = styled.input`
  width: 324px;
  height: 41px;
  padding: 5px;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  border: none;
  border-radius: 100px;
  background-color: #EFEFEF;
  color: #808080;
  box-sizing: border-box; //패딩 포함하여 크기 계산

  &::placeholder {
    
    text-align: left;}
`;

export const H1 = styled.text`
margin-bottom: 8px;
  font-size: 15px;
  text-align: center;
  color: #808080;
`

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const SocialButton = styled.button`
 width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  img {
    width: 30px; 
    height: 30px;
  }
`;

export const Button = styled.button`
width: 324px;
  height: 54px;
  padding: 5px;
  font-size: 20px;
  color: white;
  background-color: #4D2C0E;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 2px;
  
  &:hover {
  background-color: #DBC5B1;
  color:  #4D2C0E;
  }
`;

export const LoginLink = styled(Link)`
  font-size: 15px;
  color: black;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #808080;
  }
`;
