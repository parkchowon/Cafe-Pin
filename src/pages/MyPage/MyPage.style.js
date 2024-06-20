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
  border-right: 3px solid rgba(128,128,128, 0.3); 
  box-sizing: border-box;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  label {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #4D2C0E;
  margin-top: 20px;
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
  display: none;
`;
