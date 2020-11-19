import React from "react";
import styled from "styled-components";
import InputField from "./InputField";
import useForm from "../helpers/useForm";
import Button from "../components/Button";

const StyledForm = styled.div`
    display: flex;
    align-conent: center;
    justify-content: center;
    width: 50vw;
    height: 50vh;
    background-color: ##111;
`

const Form = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm();

  return (
    <StyledForm>
        
        <form onSubmit={handleSubmit} noValidate>
            Credit Card info:
            <InputField label="Card Number" type="text"/>
            <InputField label="Card Name" type="text"/>
            Expiration Date:
            <InputField label="CVV" type="text"/>
            <InputField isDate="true" label="Expiration Date"/>
            <Button name="Submit"/>
        </form>
    </StyledForm>
  );
}

export default Form;