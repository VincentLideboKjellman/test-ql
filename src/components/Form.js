import React from "react";
import styled from "styled-components";
import InputField from "./InputField";

const StyledForm = styled.div`
    display: flex;
    align-conent: center;
    justify-content: center;
    width: 50vw;
    height: 50vh;
    background-color: ##111;
`

const Form = () => {
  return (
    <StyledForm>
        
        <form>
        Credit Card info:
            <InputField label="Card Number" type="text"/>
            <InputField label="Card Name" type="text"/>
            <InputField isDate="true" label="Expiration Date" type="month"/>
        </form>
    </StyledForm>
  );
}

export default Form;