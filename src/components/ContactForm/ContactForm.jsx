import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", phoneNumber: "" }}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
          <Field type="text" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component="span" />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}
