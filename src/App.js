import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Booking from "./pages/booking";
import PageNotFound from "./pages/pagenotfound";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const currentUser = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser.currentUser) {
      return <Navigate to="/login" replace={true} />;
    } else {
      return children;
    }
  };
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <PageNotFound />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
