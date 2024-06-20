import styled from 'styled-components';

export const PostPageTitleText = styled.p`
  width: 300px;
  margin: 70px auto 50px auto;
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
`;

export const PostPageReviewArea = styled.div`
  width: 75%;
  margin: 0px auto 0px auto;
  height: auto;

  display: flex;

  box-shadow: rgba(0, 0, 0, 0.085) 0px 4px 23.5px;
  border-radius: 25px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export const ReviewContentsContainer = styled.div`
  width: 90%;
  margin: 40px 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* background-color: red; */

  @media (min-width: 1600px) {
    flex-direction: row;
    gap: 40px;
  }
  @media (max-width: 1600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ReviewRightSection = styled.div`
  height: 80%;
  width: 35%;
  /* background-color: green; */
`;

export const ReviewCafeName = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
