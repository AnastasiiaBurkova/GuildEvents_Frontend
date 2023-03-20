import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUsPage/About';
import Terms from './pages/TermsPage/Terms';
import Home from './pages/DayPage/Home';
import Week from './pages/WeekPage/Week';
import Month from './pages/MonthPage/Month';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/week' exact element={<Week />} />
          <Route path='/month' exact element={<Month />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/terms' exact element={<Terms />} />
        </Routes>
      </Router>
  );

}

export default App;
