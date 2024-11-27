import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/Contact/ContactPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
