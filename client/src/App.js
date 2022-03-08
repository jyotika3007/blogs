import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/blog" element={<SingleBlog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
