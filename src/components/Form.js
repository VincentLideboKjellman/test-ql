import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    display: flex;
    align-conent: center;
    justify-content: center;
    width: 50vw;
    height: 50vh;
    background-color: green;

    .inner{
        display: flex;
        align-conent: center;
        justify-content: center;
        width:50%;
        background-color:orange;
    }
`

const Form = () => {
  return (
    <StyledForm>
        <div class="inner">
            test
        </div>
        
    </StyledForm>
  );
}

export default Form;