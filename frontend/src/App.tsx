import React from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
};

export default App;