import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
      fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      console.log(user);
      console.log(user.id);
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
        console.log(data);

      if (error) {
        console.error('데이터를 가져오는데에 실패했습니다:', error.message);
        return;
      }

      if (data) {
        setUserProfile(data);
        setNickname(data.nickname);
        setEmail(data.email);
        setImage(data.profile_url);
      }
    } catch (error) {
      console.error('사용자 프로필 정보를 가져오는 중 오류가 발생했습니다:', error.message);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      const { data, error } = await supabase
        .from('users')
        .update({
          profile_url: image,
          nickname,
          email,
        })
        .eq('id', userId);

      if (error) {
        throw error;
      }

      if (data) {
        console.log('프로필이 성공적으로 업데이트되었습니다:', data);
      }
    } catch (error) {
      console.error('프로필 업데이트 중 오류가 발생했습니다:', error.message);
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
      setImage(e.target.files[0]);
    }
  };

  return (
    <MyPageContainer>
      <ProfileSection>
        <ProfilePicture>
          <Title>마이 페이지</Title>
          <Circle>
            {image && <img src={URL.createObjectURL(image)} alt="프로필 사진" />}
          </Circle>
          {isEditing ? (
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
