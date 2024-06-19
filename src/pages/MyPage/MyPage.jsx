import React, { useState } from 'react';
import {
  MyPageContainer,
  ProfileSection,
  ProfilePicture,
  Circle,
  Nickname,
  EditProfileButton,
  SaveProfileButton,
  ReviewsSection,
  ReviewsHeader,
  Reviews,
  Review,
  Input,
  Label,
  FileInput,
  Title
} from './MyPage.style';

function MyPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('user9999');
  const [email, setEmail] = useState('example@email.com');
  const [image, setImage] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <MyPageContainer>
      <ProfileSection>
        <ProfilePicture>
          <Title>마이 페이지</Title>
          <Circle>
            {image ? <img src={image} alt="profile" /> : null}
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
              <p>{nickname}</p>
              </Label>
              <Label>
                이메일
              <p>{email}</p>
              </Label>
              <EditProfileButton onClick={handleEditClick}>프로필 수정</EditProfileButton>
            </>
          )}
        </ProfilePicture>
      </ProfileSection>
      <ReviewsSection>
        <ReviewsHeader>작성한 리뷰</ReviewsHeader>
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
