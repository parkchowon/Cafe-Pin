import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
`;

export const ProfileSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-right: 1px solid #808080; 
  box-sizing: border-box;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #4D2C0E;
  margin-bottom: 30px;
`;

export const EditProfileButton = styled.button`
  background-color: #4D2C0E;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const SaveProfileButton = styled.button`
  background-color: #4D2C0E;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const ReviewsSection = styled.div`
  width: 80%;
  padding: 20px;
`;

export const ReviewsHeader = styled.h2`
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  color: #4D2C0E;
`;

export const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Review = styled.div`
  width: 23%;
  height: 150px;
  background-color: #dcdcdc;
  margin: 10px 0;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #efefef;
  width: 60%;
  height: 10px;
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Value = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;

export const FileInput = styled.input`
  margin-top: 10px;
`;
