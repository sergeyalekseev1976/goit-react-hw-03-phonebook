import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  margin-bottom: 20px;
  padding: 10px;
  max-width: 400px;
  border: 1px solid black;
`;
export const Label = styled.label`
  position: relative;
  display: block;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 25px;
`;
export const Input = styled(Field)`
  display: block;
  margin-top: 8px;
  outline: none;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid grey;
  &:hover,
  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 4px 1px rgb(0, 0, 255);
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  display: block;
  margin-bottom: 15px;
  top: 65px;
  left: 0;
  color: red;
  font-size: 11px;
`;

export const ButtonForm = styled.button`
  display: block;
  padding: 2px 10px;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0px 0px 4px 1px rgb(0, 0, 255);
  }
  &:active {
    background-color: rgb(0, 0, 255);
    color: white;
  }
`;
