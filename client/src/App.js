import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Screens/Home/Home";
import Login from "./Components/Screens/Login/Login";
import Signup from "./Components/Screens/Signup/Signup";
import Profile from "./Components/Screens/Profile/Profile";
import CreatePost from "./Components/Screens/CreatePost/CreatePost";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/CreatePost" element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
