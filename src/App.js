import React from 'react';
import './app.css';
import Home from './pages/Home/Home';
import Sidebar from './parts/sidebar/Sidebar';
import Topbar from './parts/topbar/Topbar';

const App = function () {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="pages">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
