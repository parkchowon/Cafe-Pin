import supabase from "./supabase";

//github 로그인 기능
export const logInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });

  if (error) {
    console.error('GitHub로 로그인하는 중 오류 발생:', error);
    return;
  }

  if (data) {
    const user = data.user;
    console.log('GitHub 사용자:', user);
    await handleUser(user);
  }
};

//kakao 로그인 기능
export const logInWithKakao = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
  });

  if (error) {
    console.error('Kakao로 로그인하는 중 오류 발생:', error);
    return;
  }

  if (data) {
    const user = data.user;
    console.log('Kakao 사용자:', user);
    await handleUser(user);
  }
};

const handleUser = async (user) => {
  const { id, email, user_metadata } = user;
  if (!user_metadata) {
    console.error('사용자 메타데이터가 없습니다:', user);
    return;
  }
  
  const { full_name, avatar_url } = user_metadata;

  // 사용자가 이미 존재하는지 확인
  const { data: existingUser, error: selectError } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (selectError && selectError.code !== 'PGRST116') {  // 실제 오류 의미에 따라 이 조건을 조정하세요
    console.error('사용자 확인 중 오류 발생:', selectError);
    return;
  }

  if (existingUser) {
    console.log('사용자가 이미 존재합니다:', existingUser);
  } else {
    // 새로운 사용자 삽입
    const { data: insertedUser, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          'id': id,
          'email': email,
          'nickname': full_name,
          'avatar_url': avatar_url,
        },
      ]);

    if (insertError) {
      console.error('사용자 삽입 중 오류 발생:', insertError);
    } else {
      console.log('사용자가 성공적으로 삽입되었습니다:', insertedUser);
    }
  }
};
