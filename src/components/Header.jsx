import React, { useMemo } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return useMemo(
    () => (
      <StContainer>
        <AiFillHome style={{ width: "24px", height: "24px" }} onClick={goHome} />
        <StTitle>My Journal</StTitle>
      </StContainer>
    ),
    []
  );
};

// React.memo
export default React.memo(Header);

// styled components
const StContainer = styled.header`
  height: 50px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 24px;
`;

const StTitle = styled.h1`
  font-weight: 700;
`;
