import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flashcardmanager from './Flashcardmanager.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz.js';
import ToDo from './ToDo.js';
import Login from './Login.js';
import { AuthProvider } from './AuthContext.js';
import ProtectedRoute from './ProtectedRoute.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ul
          className="nav"
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
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Log-in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz" className="nav-link">
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/to-do" className="nav-link">
              To-do
            </Link>
          </li>
        </ul>
        <nav>
  
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Flashcardmanager /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
          <Route path="/to-do" element={<ProtectedRoute><ToDo /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);