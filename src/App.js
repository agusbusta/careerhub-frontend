import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute";
import { useAuth0 } from "@auth0/auth0-react";
import "../src/styles.css";
import Auth0ProviderWithHistory from "./components/auth0Provider/Auth0Provider";
import MyAccount from "./pages/myAccount/MyAccount";

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomeRedirect />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/myAccount" element={<MyAccount />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

const HomeRedirect = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? <Navigate to="/dashboard" /> : <Home />;
};

export default App;
