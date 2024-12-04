import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SignInPage from "./pages/sign-in"; // Import updated SignInPage

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />

        {/* Protected Route */}
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />

        {/* Fallback Error Route */}
        <Route path="/*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
