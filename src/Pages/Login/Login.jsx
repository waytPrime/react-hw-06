import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/AuthOps";

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
