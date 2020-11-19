import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    button{
        background-color: #2196f3;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
`

const Button = (props) => {

  return (
    <StyledButton>
        <button>{props.name}</button>
    </StyledButton>
  );
}

export default Button;