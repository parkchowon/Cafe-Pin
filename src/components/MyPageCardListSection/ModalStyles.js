import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달의 앱 엘리먼트 설정

export const CustomModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #F6F0E9;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #4D2C0E;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  font-size: 16px;
  color: #4D2C0E;
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #DBC5B1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  transition: background-color 0.3s;

  &:hover {
    background-color: #59371F;
  }

  & + button {
    margin-left: 10px;
  }
`;
