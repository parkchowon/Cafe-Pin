import supabase, { loginRedirectUrl } from './supabase';

// GitHub 로그인 기능
export const logInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  });

  if (error) {
    console.error('GitHub로 로그인하는 중 오류 발생:', error);
  }

  // 로그인 후 사용자 리다이렉트는 자동으로 처리됩니다
};

// Kakao 로그인 기능
export const logInWithKakao = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: loginRedirectUrl
    }
  });
  alert(data);
  alert(error);
  if (error) {
    console.error('Kakao로 로그인하는 중 오류 발생:', error);
  }

  // 로그인 후 사용자 리다이렉트는 자동으로 처리됩니다
};
