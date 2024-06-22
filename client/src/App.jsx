import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Booking from "./pages/Booking";
import NewsPage from "./pages/NewsPage";
import Booking2 from "./pages/Booking2";
import Profile from "./pages/Profile";
import Riwayat from "./pages/Riwayat";
import Ubahpw from "./pages/Ubahpw";
import Ticket from "./pages/Ticket";
import PageNews from "./pages/PageNews";
import AddTempat from "./pages/AddTempat";
import AddTempatKosong from "./pages/AddTempatKosong";
import AddTempatKosong2 from "./pages/AddTempatKosong2";
import AdminProfile from "./pages/AdminProfile";
import EditAdminProfile from "./pages/EditAdminProfile";
import AdminTempat from "./pages/AdminTempat";
import EditAdminTempat from "./pages/EditAdminTempat";

const App = () => {
  return (
    <div className="font-body">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="Newspage" element={<NewsPage />}></Route>
        <Route path="Booking" element={<Booking />}></Route>
        <Route path="Booking2" element={<Booking2 />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="Riwayat" element={<Riwayat />}></Route>
        <Route path="Ubahpw" element={<Ubahpw />}></Route>
        <Route path="Ticket" element={<Ticket />}></Route>
        <Route path="PageNews" element={<PageNews />}></Route>
        <Route path="AddTempat" element={<AddTempat />}></Route>
        <Route path="AddTempatKosong" element={<AddTempatKosong />}></Route>
        <Route path="AddTempatKosong2" element={<AddTempatKosong2 />}></Route>
        <Route path="AdminProfile" element={<AdminProfile />}></Route>
        <Route path="EditAdminProfile" element={<EditAdminProfile />}></Route>
        <Route path="AdminTempat" element={<AdminTempat />}></Route>
        <Route path="EditAdminTempat" element={<EditAdminTempat />}></Route>
      </Routes>
    </div>
  );
};

export default App;
