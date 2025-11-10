import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import Page from "./pages/Dashboard/page";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Page />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
