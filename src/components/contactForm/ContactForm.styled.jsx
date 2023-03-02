import styled from '@emotion/styled';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  gap: 15px;
  width: 300px;
  margin: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: #fff;
`;

export const StyledErrorMessage = styled.span`
  font-size: 15px;
  color: #c79292;
`;
export const StyledField = styled(Field)`
  width: 250px;
  height: 25px;
  border-radius: 5px;
`;
export const Button = styled.button`
  display: block;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 40px;
  border: none;
  background-color: skyblue;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: color 250ms ease, box-shadow 250ms ease;
  &:active {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
  &:hover {
    color: #fff;
  }
`;
