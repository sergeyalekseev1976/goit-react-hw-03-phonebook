import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  FormWrap,
  Input,
  Message,
  Label,
  ButtonForm,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: yup
    .string()
    .required()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
          <Message name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Message name="number" component="div" />
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormWrap>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
