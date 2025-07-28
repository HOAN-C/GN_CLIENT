import styled from "styled-components";

export const FormContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ##23499e;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => (props.success ? "#28a745" : "#dc3545")};
`;

export const SubscribeButton = styled.button`
  margin-top: 15px;
  padding: 12px 24px;
  background-color: #23499e;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;
