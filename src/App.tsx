import { Routes, Route } from "react-router-dom";
import { Home } from "./component/TodoApp/Home";
import { Login } from "./component/Authorization/Login";
import { Signup } from "./component/Authorization/Signup";
import { Customnav } from "./component/TodoApp/Customnav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <>
      <Customnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
