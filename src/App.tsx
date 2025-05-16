import { BrowserRouter as Router, Routes, Route } from "react-router"
import Login from "./routes/auth/login"
import SignUp from "./routes/auth/signup"
import Home from "./routes/home"
import ResetPassword from "./routes/auth/reset-password"
import Navbar from "./components/app/nav-bar"
import ForgetPassword from "./routes/auth/forget-password"


export default function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
    </>
  )
};