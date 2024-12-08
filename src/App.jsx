import { Link, Route, Routes } from "react-router-dom";

import UserGreating from "./components/UserGreating/UserGreating";
import ButtonAuth from "./components/ButtonAuth/ButtonAuth";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/AuthSlice";
import { lazy, Suspense, useEffect } from "react";
import { refreshUser } from "./redux/AuthOps";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
  const ContactPage = lazy(() => import("./Pages/ContactPage/ContactPage"));
  const Login = lazy(() => import("./Pages/Login/Login"));
  const Register = lazy(() => import("./Pages/Register/Register"));

  return isRefreshing ? (
    <p>загрузка</p>
  ) : (
    <>
      <div>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        {isLoggedIn ? <UserGreating /> : <ButtonAuth />}
      </div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
