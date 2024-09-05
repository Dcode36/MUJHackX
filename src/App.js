import React from 'react'
import HomePage from './components/Homepage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Verify from './components/Homepage/Verify/Verify';
import Issuer from './components/Homepage/Issue/Issuer';
import Course from './components/Homepage/Course/Course';
import Docs from './components/Homepage/Docs/Docs';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/verify" element={<Verify />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/issuer" element={<Issuer />} />
          <Route path="/courses" element={< Course />} />
        </Routes>
      </Router >
    </div>
  )
}

export default App
