import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import dummyData from "./services/dummyData.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage initialUsers={dummyData} />} />
        <Route
          path="/user/:userId"
          element={<UserDetailsPage users={dummyData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
