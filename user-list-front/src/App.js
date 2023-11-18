import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./context/ThemeContext"; // Import the CustomThemeProvider
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import dummyData from "./services/dummyData.json";

function App() {
  return (
    <CustomThemeProvider>
      {" "}
      {/* Wrap your Router with CustomThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage initialUsers={dummyData} />} />
          <Route
            path="/user/:userId"
            element={<UserDetailsPage users={dummyData} />}
          />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
