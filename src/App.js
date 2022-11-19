import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactDetails from "./components/ContactDetails";
import Login from "./components/Login";
import Profile from "./components/Profile";
import VerifyEmail from "./components/VerifyEmail";
import Header from "./components/Header";
import ForgotPassword from "./components/ForgotPassword";
import Form from "./components/Form";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }>
          <Route
            path="details"
            element={
              <>
                <ContactDetails />
              </>
            }
          />
        </Route>
        <Route
          path="/form"
          element={
            <RequireAuth>
              <Form />
            </RequireAuth>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <>
              <Header />
              <ForgotPassword />
            </>
          }
        />
        <Route path="/verifyemail" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}

export default App;
