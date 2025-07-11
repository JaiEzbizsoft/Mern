import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

// Main pages/components
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
import MenuCategoryPage from './components/menucategorypage';

// Auth
import Login from './auth/login';
import Signup from './auth/signup';

// Admin components
import Admin from './components/admin/admin';
import MenuForm from './components/admin/menuform';
import CategoryForm from './components/admin/categoryform';

// Dashboard combines all landing components
const Dashboard = () => {
  return (
    <>
      <Navbar isAuthPage={false} />
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

// Wrapper to control route logic, background, login popup
const AppWrapper = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const [visitCount, setVisitCount] = useState(0);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    if (!token && location.pathname === '/') {
      const count = parseInt(localStorage.getItem('visitCount') || '0') + 1;
      localStorage.setItem('visitCount', count.toString());
      setVisitCount(count);
      if (count <= 2) {
        setShowLoginPopup(true);
        setTimeout(() => setShowLoginPopup(false), 5000);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const isDashboard = location.pathname === '/';
    document.body.classList.toggle('dashboard-bg', isDashboard);
  }, [location.pathname]);

  return (
    <>
      {showLoginPopup && !token && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            background: '#878f47',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}
        >
          Please login or sign up to continue
        </div>
      )}

      <Routes>
        {/* Main public pages */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" />} />
        <Route path="/menu/:category" element={<MenuCategoryPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={<Admin />}>
          <Route path="menu" element={<MenuForm />} />
          <Route path="category" element={<CategoryForm />} />
        </Route>
      </Routes>
    </>
  );
};

// Final App with Router wrapper
const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
