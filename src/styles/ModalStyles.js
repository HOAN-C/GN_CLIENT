import styled from "styled-components";

export const Modal = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.4rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

export const ModalContent = styled.div`
  padding: 25px;
  line-height: 1.6;
`;

export const Description = styled.p`
  margin-bottom: 15px;
  color: #555;
`;

export const InstructionsList = styled.ol`
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    color: #666;
  }
`;
