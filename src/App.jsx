import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import CourseDetailsPage from './components/pages/CourseDetailsPage';
import CreatorProfilePage from './components/pages/CreatorProfilePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ScreenSwitcher from './components/common/ScreenSwitcher';
import { allCourses } from './data/mockData';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState(allCourses[1]);

  const handleNavigate = (page) => {
    const routeMap = {
      'home': '/',
      'search': '/search',
      'course-details': '/course',
      'course-lessons': '/course/lessons',
      'course-reviews': '/course/reviews',
      'creator': '/creator',
      'login': '/login',
      'register': '/register',
      'notfound': '/404'
    };
    navigate(routeMap[page] || '/404');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    navigate('/course');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active page for ScreenSwitcher widget based on current URL path
  let activePage = 'home';
  if (location.pathname === '/search') activePage = 'search';
  else if (location.pathname === '/course/lessons') activePage = 'course-lessons';
  else if (location.pathname === '/course/reviews') activePage = 'course-reviews';
  else if (location.pathname.startsWith('/course')) activePage = 'course-details';
  else if (location.pathname === '/creator') activePage = 'creator';
  else if (location.pathname === '/login') activePage = 'login';
  else if (location.pathname === '/register') activePage = 'register';
  else if (location.pathname === '/404') activePage = 'notfound';

  return (
    <div className="relative min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} onSelectCourse={handleSelectCourse} />} />
        <Route path="/search" element={<SearchPage onNavigate={handleNavigate} onSelectCourse={handleSelectCourse} />} />
        
        <Route path="/course" element={<CourseDetailsPage initialTab="description" course={selectedCourse} onNavigate={handleNavigate} />} />
        <Route path="/course/lessons" element={<CourseDetailsPage initialTab="lessons" course={selectedCourse} onNavigate={handleNavigate} />} />
        <Route path="/course/reviews" element={<CourseDetailsPage initialTab="reviews" course={selectedCourse} onNavigate={handleNavigate} />} />
        
        <Route path="/creator" element={<CreatorProfilePage onNavigate={handleNavigate} onSelectCourse={handleSelectCourse} />} />
        <Route path="/login" element={<LoginPage onNavigate={handleNavigate} />} />
        <Route path="/register" element={<RegisterPage onNavigate={handleNavigate} />} />
        
        <Route path="/404" element={<NotFoundPage onNavigate={handleNavigate} />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {/* Floating Figma Screen Switcher Widget */}
      <ScreenSwitcher 
        activePage={activePage} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
