import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Booking from "./pages/booking";
import PageNotFound from "./pages/pagenotfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
