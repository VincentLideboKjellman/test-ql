import {React, useState} from "react";
import styled from "styled-components";
//import useForm from "../helpers/useForm";

const StyledInputField = styled.div`
*,
:before,
:after {
  box-sizing: border-box;
}

body {
  background: #424242;
}

form h1 {
  font-size: 3em;
  font-weight: 300;
  text-align: center;
  color: #2196f3;
}
form h5 {
  text-align: center;
  text-transform: uppercase;
  color: #c6c6c6;
}
form hr.sep {
  background: #2196f3;
  box-shadow: none;
  border: none;
  height: 2px;
  width: 25%;
  margin: 0px auto 45px auto;
}

.group {
  position: relative;
  margin: 45px 0;
}

textarea {
  resize: none;
}

input,
textarea {
  background: none;
  color: #c6c6c6;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 320px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #c6c6c6;
}
input:focus,
textarea:focus {
  outline: none;
}
input:focus ~ label, input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  top: -14px;
  font-size: 12px;
  color: #2196f3;
}
input:focus ~ .bar:before,
textarea:focus ~ .bar:before {
  width: 320px;
}


label {
  color: #c6c6c6;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  -webkit-transition: 300ms ease all;
  transition: 300ms ease all;
}

.bar {
  position: relative;
  display: block;
  width: 320px;
}
.bar:before {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #2196f3;
  -webkit-transition: 300ms ease all;
  transition: 300ms ease all;
  left: 0%;
}


.expire-div{
    width: 100%;
}

select {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    width:50%;
    //appearance: none;       /* Remove default arrow */
 }


`
const InputField = (props) => {

    /* How to Use:
    * isDate = true to get dropdown list of dates
    * type = value for setting the input type
    */


    // Data
    const monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const yearArray = ["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"];

    // Default props
    const {isDate = false } = props;

    

    return (
        <StyledInputField>
            <>
                <div className="wrapper">
                    {/* Normal input field */}
                    {!isDate && <>
                        {/* <input autoComplete="off" classNameName={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                        {errors.email && (
                            <p classNameName="help is-danger">{errors.email}</p>
                         )} */}

                        <div className="group">
                        <input type={props.type} required="required"/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>{props.label}</label>
                        </div>
                    </>}
                    {/* Date pick field */}
                    {isDate && <>
                        <div className="group">
                        <div className="expire-div">
                            <label></label>
                            <select>
                                {monthArray.map(function(month, index){
                                return <option key={index}>{month}</option>;
                                })}
                            </select>
                            <label></label>
                            <select>
                                {yearArray.map(function(year, index){
                                return <option key={index}>{year}</option>;
                                })}
                            </select>
                        </div>
                        </div>
                    </>}
                </div>
            </>
        </StyledInputField>
    );
}

export default InputField;