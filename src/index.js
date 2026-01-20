import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flashcardmanager from './Flashcardmanager.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ul
        class="nav"
        style={{
          background: "#373f51",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <li style={{ margin: "10px 15px" }}>
          <h1>ThomasCards</h1>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link active">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/quiz" class="nav-link active">
            Quiz
          </Link>
        </li>
      </ul>
      <nav>
  
      </nav>
      <Routes>
        <Route path="/" element={<Flashcardmanager />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

