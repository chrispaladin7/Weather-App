import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
// import PcPostPage from "../PcPostPage/PcPostPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/posts" element={<PcPostPage />} /> */}
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </main>
  );
}
