import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, Title, Form, Label, Input, H1, SocialLoginContainer, SocialButton, Button, LoginLink } from './SignUpPage.style';

const SignUpPage = () => {
  const navigate = useNavigate(); 
  const handleSignUp = (e) => {
    e.preventDefault();
    // 회원가입 로직
    console.log("회원가입되나요");
    navigate("/auth/login");
  };
  
  //Supa base 연동 
  //각 입력 값 유효성 검사 
  //소셜 회원가입 기능 구현
  //키보드 엔터를 이용하여 가입하기 기능 
  //가입하기 버튼 클릭 시 로그인 페이지 이동  

  return (
    <Wrapper>
    <Container>
    <Title>Cafe Pin</Title>
      <Form onSubmit={handleSignUp}>
      <Label htmlFor="nickname">닉네임</Label>
        <Input type="text" placeholder="닉네임을 입력하세요" />
        <Label htmlFor="email">이메일</Label>
        <Input type="email" placeholder="example@email.com" />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" placeholder="비밀번호는 6자 이상 입력하세요" />
        <Label htmlFor="confirm password">비밀번호 확인</Label>
        <Input type="password" placeholder="비밀번호를 다시 입력하세요" />
        <H1>SNS 회원가입</H1>
        <SocialLoginContainer>
          <SocialButton>소셜</SocialButton>
          <SocialButton>로그</SocialButton>
          <SocialButton>인</SocialButton>
        </SocialLoginContainer>
        <Button type="submit">가입하기</Button>
        <LoginLink to="/auth/login">이미 가입한 계정이 있으신가요?</LoginLink>
      </Form>
    </Container>
    </Wrapper>
  );
};
export default SignUpPage;
