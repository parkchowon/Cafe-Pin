import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기

import supabase from '../../apis/supabase';

import {
  MyPageContainer,
  ProfileSection,
  ProfilePicture,
  Circle,
  EditProfileButton,
  SaveProfileButton,
  ReviewsSection,
  ReviewsHeader,
  Reviews,
  Review,
  Input,
  Label,
  Value,
  FileInput,
  Title
} from './MyPage.style';

function MyPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // useNavigate 사용

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const user = supabase.auth.users();
    if (user) {
      setLoggedIn(true);
      fetchProfile(user.user.id); // user.user.id를 사용하여 fetchProfile 호출
    } else {
      setLoggedIn(false);
      navigate('/LoginPage'); // useNavigate로 리디렉션 처리
    }
  };

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('users')
      .select('nickname, email, profile_url')
      .eq('uuid', userId)
      .single();

    if (data) {
      setNickname(data.nickname);
      setEmail(data.email);
      setImage(data.profile_url);
    }

    if (error) {
      console.error('Error fetching profile:', error.message);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const user = supabase.auth.session();
    if (user) {
      const { error } = await supabase
        .from('users')
        .update({ nickname, email, profile_url: image })
        .eq('uuid', user.user.id);

      if (error) {
        console.error('Error updating profile:', error.message);
      } else {
        setIsEditing(false);
      }
    }
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const { data, error } = await supabase.storage
      .from('users')
      .upload(`public/${file.name}`, file);

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {
      const imageUrl = await supabase.storage.from('avatars').getPublicUrl(data.path).publicURL;
      setImage(imageUrl);
    }
  };

  return (
    <MyPageContainer>
      <ProfileSection>
        <ProfilePicture>
          <Title>마이 페이지</Title>
          <Circle>
            {image ? <img src={image} alt="프로필" /> : null}
          </Circle>
          {loggedIn ? (
            isEditing ? (
              <>
                <Label>
                  닉네임
                  <Input type="text" value={nickname} onChange={handleNicknameChange} />
                </Label>
                <Label>
                  이메일
                  <Input type="email" value={email} onChange={handleEmailChange} />
                </Label>
                <FileInput type="file" onChange={handleImageChange} />
                <SaveProfileButton onClick={handleSaveClick}>저장하기</SaveProfileButton>
              </>
            ) : (
              <>
                <Label>
                  닉네임
                  <Value>{nickname}</Value>
                </Label>
                <Label>
                  이메일
                  <Value>{email}</Value>
                </Label>
                <EditProfileButton onClick={handleEditClick}>프로필 수정</EditProfileButton>
              </>
            )
          ) : (
            <p>로그인이 필요합니다.</p>
          )}
        </ProfilePicture>
      </ProfileSection>
      <ReviewsSection>
        <ReviewsHeader>내가 작성한 리뷰</ReviewsHeader>
        <Reviews>
          {[...Array(12)].map((_, index) => (
            <Review key={index} />
          ))}
        </Reviews>
      </ReviewsSection>
    </MyPageContainer>
  );
}

export default MyPage;
