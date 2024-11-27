import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/AuthOps";

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}