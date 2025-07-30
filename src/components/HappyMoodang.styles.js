import styled from "styled-components";

export const HappyMoodangContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HappyMoodangTitle = styled.h2`
  margin-top: 10px;
  font-size: 22px;
  font-weight: 600;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 12px 24px;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.disabled ? "rgb(59, 60, 70)" : "#23499e"};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;
