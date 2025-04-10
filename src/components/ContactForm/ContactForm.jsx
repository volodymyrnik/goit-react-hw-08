import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { addContacts } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";
const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required input field"),
    number: Yup.string()
      .matches(
        /^[+\d]?[0-9\s\-()]{3,50}$/,
        "Number must be between 3 and 50 digits"
      )
      .required("Required input field"),
  });

  return (
    <Formik
      className={css.formik}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.formLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.formInput}
          autoComplete="on"
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.formLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.formInput}
          autoComplete="on"
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}