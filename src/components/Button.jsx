import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ btnName, onClick, isDisabled }) => (
  <StButton onClick={onClick} disabled={isDisabled}>
    {btnName}
  </StButton>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const StButton = styled.button`
  width: 100%;
  height: 100px;
  border: 1px solid gray;
  text-align: center;
`;

export default Button;
