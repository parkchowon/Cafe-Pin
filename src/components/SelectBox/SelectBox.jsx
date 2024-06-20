import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item, Wrapper } from './SelectBox.style';

function SelectBox() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.id);
  };

  return (
    <Wrapper>
      <Item className="first" id="auth/sign-up" onClick={handleClick}>
        회원가입
      </Item>
      <Item className="second" id="auth/login" onClick={handleClick}>
        로그인
      </Item>
    </Wrapper>
  );
}

export default SelectBox;
