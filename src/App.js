import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactDetails from "./components/ContactDetails";
import Login from "./components/Login";
import Profile from "./components/Profile";
import VerifyEmail from "./components/VerifyEmail";
import Header from "./components/Header";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ContactDetails />} />
        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}

export default App;
