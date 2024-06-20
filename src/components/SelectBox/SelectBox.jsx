import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../apis/user.api';
import { Item, Wrapper } from './SelectBox.style';

function SelectBox() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);

  const handleClick = (e) => {
    const path = e.target.id;
    if (path == '') {
      logoutUser();
      window.location.reload();
    }
    navigate(path);
  };

  return (
    <Wrapper>
      {user.id ? (
        <>
          <Item className="first" id="my-page" onClick={handleClick}>
            마이페이지
          </Item>
          <Item className="second" id="" onClick={handleClick}>
            로그아웃
          </Item>
        </>
      ) : (
        <>
          <Item className="first" id="auth/sign-up" onClick={handleClick}>
            회원가입
          </Item>
          <Item className="second" id="auth/login" onClick={handleClick}>
            로그인
          </Item>
        </>
      )}
    </Wrapper>
  );
}

export default SelectBox;
