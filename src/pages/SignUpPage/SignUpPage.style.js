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
  margin-left: 10px;
    font-family: 'Playwrite CO', cursive;
    font-size: 32px;
`;

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  width: 324px;
  height: 443px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 23.5px; */
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 20px;
  color: #808080;
`;

export const Input = styled.input`
  width: 324px;
  height: 41px;
  padding: 5px;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  border: none;
  border-radius: 100px;
  background-color: #EFEFEF;
  color: #808080;
  box-sizing: border-box;

`;

export const H1 = styled.h1`
margin-bottom: 15px;
margin-top: 10px;
  font-size: 15px;
  text-align: center;
  color: #808080;
`

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SocialButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 23.5px;
  border: none;
  margin: 0 15px;
  background-color: white;

  cursor: pointer;

  &:hover {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 23.5px;
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
