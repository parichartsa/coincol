import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useActionData } from 'react-router-dom';
import { UserProvider } from './ContextApi';
import Login from './Component/login';
import Home from './Component/Home';
import Register from './Component/Register';
import Knowledge from './Component/knowledge';
import ProfilePage from './Component/Profile';
import Edit_profile from './Component/edit-profile';
import Add_collection from './Component/add_collection';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editprofile" element={<Edit_profile />} />
          <Route path="/addcollection" element={<Add_collection />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
