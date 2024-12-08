import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/AuthOps";
import { selectError } from "../../redux/ContactSlice";

export default function Register() {
  const dispatch = useDispatch();
  const isError = useSelector(selectError)
  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
  };
  return (
    <>
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
     {isError}
    </>
  );
}
