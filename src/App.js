import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Error404 from './Pages/Error404/Error404';
import Home from './Pages/HomeCompo/Home/Home';
import Login from './Pages/Login/Login';
import Membership from './Pages/Membership/Membership';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import SignUp from './Pages/SignUP/SignUp';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
