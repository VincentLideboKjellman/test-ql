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
            <h3>Credit Card info:</h3>
            <InputField label="Card Number" type="text"/>
            <InputField label="Card Name" type="text"/>
            <InputField label="CVV" type="text"/>
            <h3>Expiration Date:</h3>
            <InputField isDate="true" label="Expiration Date"/>
            <Button name="Submit"/>
        </form>
    </StyledForm>
  );
}

export default Form;