import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactDetails from "./components/ContactDetails";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="details" element={<ContactDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
