import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/home/Home';
import Sidebar from './parts/sidebar/Sidebar';
import Topbar from './parts/topbar/Topbar';
import UserList from './parts/userList/UserList';

const App = function () {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
