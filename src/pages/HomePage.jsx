import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const goEditDiary = () => {
    navigate("/work/create");
  };
  const goDiariesPage = () => {
    navigate("/diaries");
  };
  return (
    <StContainer>
      <StMenu
        onClick={goEditDiary}
        onKeyDown={(event) => {
          // 웹 접근성을 위한 코드
          if (event.key === "Enter" || event.key === " ") {
            goEditDiary();
          }
        }}
        // role과 tabIndex로 클릭 가능한 요소임을 명시
        role="button"
        tabIndex={0}
      >
        일기 쓰러 가기
      </StMenu>
      <StMenu
        onClick={goDiariesPage}
        onKeyDown={(event) => {
          // 웹 접근성을 위한 코드
          if (event.key === "Enter" || event.key === " ") {
            goDiariesPage();
          }
        }}
        // role과 tabIndex로 클릭 가능한 요소임을 명시
        role="button"
        tabIndex={0}
      >
        일기 목록 보러가기
      </StMenu>
    </StContainer>
  );
};

const StContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 24px;
`;

const StMenu = styled.div`
  padding: 0px 20px;
  width: 100%;
  height: 120px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-sizing: border-box;
  line-height: 120px;
  font-size: 20px;
  font-weight: 600;
`;

export default Home;
