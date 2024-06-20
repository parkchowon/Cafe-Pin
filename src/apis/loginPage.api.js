import supabase from "./supabase";

export const logInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });

  if (error) {
    console.error('Error logging in with GitHub:', error);
    return;
  }

  if (data) {
    const user = data.user;
    await handleUser(user);
  }
};

export const logInWithKakao = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
  });

  if (error) {
    console.error('Error logging in with Kakao:', error);
    return;
  }

  if (data) {
    const user = data.user;
    console.log('Kakao user:', user);

    await handleUser(user);
  }
};

const handleUser = async (user) => {
    const { id, email, user_metadata } = user;
    const { full_name } = user_metadata;
    
  const { data: existingUser, error: selectError } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (selectError && selectError.code !== 'PGRST116') {
    console.error('Error checking user:', selectError);
    return;
  }

  if (existingUser) {
    console.log('User already exists:', existingUser);
  } else {
    const { data: insertedUser, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          'id': id,
          'email': email,
          'nickname': full_name,
        },
      ]);

    if (insertError) {
      console.error('Error inserting user:', insertError);
    } else {
      console.log('User inserted successfully:', insertedUser);
    }
  }
};
