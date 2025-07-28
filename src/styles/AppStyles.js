import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #d0ecff, #ffe0eb);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 40px 20px;
  padding-bottom: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MooDangHouse = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MooDang = styled.img`
  width: 200%;
  height: 200%;
  transform: translateY(-110px);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
`;

export const MooDangComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  height: 65px;
`;
