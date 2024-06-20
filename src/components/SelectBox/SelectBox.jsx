import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SWITCH_TO_LOGGED_OUT } from '../../redux/slices/isLoggedInSlice';
import { Item, Wrapper } from './SelectBox.style';

function SelectBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const handleClick = (e) => {
    const path = e.target.id;
    if (path == '') {
      dispatch(SWITCH_TO_LOGGED_OUT());
      localStorage.removeItem('accessToken');
      navigate(path);
    }
    navigate(path);
  };

  return (
    <Wrapper>
      {isLoggedIn ? (
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
