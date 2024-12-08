import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/ContactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values, actions) => {
    console.log(values);

    dispatch(addContact(values));

    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}
