import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, Title, Form,Label, Input, H1, SocialLoginContainer,SocialButton, Button, SignUpLink } from './LoginPage.style';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직
    console.log("로그인되나");
    navigate("/");
  };
  //Supa base 연동
  //로그인 유효성 검사 
  //소셜로그인 기능 구현
  //키보드 엔터를 이용하여 로그인하기 기능 
  //로그인 버튼 클릭 시 홈페이지로 이동 navigate 사용
  //코드 상황 보고 소셜로그인 컴포넌트 만들어사용하기
  
  return (
    <Wrapper>
    <Container>
       <Title>Cafe Pin</Title>
      <Form onSubmit={handleLogin}>
        <Label htmlFor="email">이메일</Label>
        <Input type="text" placeholder="example@email.com" required />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" placeholder="비밀번호는 6자 이상 입력하세요" required />
        <H1>SNS 로그인</H1>
        <SocialLoginContainer>
          <SocialButton>소셜</SocialButton>
          <SocialButton>로그</SocialButton>
          <SocialButton>인</SocialButton>
        </SocialLoginContainer>
        <Button type="submit">로그인</Button>
        <SignUpLink to="/auth/sign-up">아직 회원이 아니신가요?</SignUpLink>
      </Form>
    </Container>
     </Wrapper>
  );
};

export default LoginPage;
