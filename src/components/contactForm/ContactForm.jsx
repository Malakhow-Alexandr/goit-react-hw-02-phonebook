import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  StyledForm,
  Label,
  StyledErrorMessage,
  StyledField,
  Button,
} from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    onSubmit(values.name, values.number);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label>
          Name
          <br />
          <StyledField type="text" name="name" />
          <ErrorMessage component={StyledErrorMessage} name="name" />
        </Label>

        <Label>
          Number
          <br />
          <StyledField type="tell" name="number" />
          <ErrorMessage component={StyledErrorMessage} name="number" />
        </Label>

        <Button type="submit">Add Contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
