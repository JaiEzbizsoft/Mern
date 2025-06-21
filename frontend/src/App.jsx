import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import About from './components/about';
import Menu from './components/menu';
import Testimonials from './components/testimonials';
import Chefs from './components/chefs';
import BookATable from './components/bookATable';
import Location from './components/location';
import Moments from './components/moments';
import Contact from './components/contact';
import Footer from './components/footer';

import Login from './auth/login';
import Signup from './auth/signup';

//  Move Dashboard outside to keep App clean
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Menu />
      <Testimonials />
      <Chefs />
      <BookATable />
      <Location />
      <Moments />
      <Contact />
      <Footer />
    </>
  );
};

//  This handles background toggling based on route
const AppWrapper = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const isDashboard = location.pathname === '/';
    document.body.classList.toggle('dashboard-bg', isDashboard);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
      <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" />} />
    </Routes>
  );
};

//  Final App with Router
const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
