import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/ThemeContext"; // Import the CustomThemeProvider
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
