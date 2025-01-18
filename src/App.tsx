import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PhenomenonPage from './pages/PhenomenonPage';
import StarField from './components/StarField';
import { phenomena } from './data/phenomena';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background layer */}
        <StarField />
        
        {/* Layout div for content */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* <div className="layout">
            <Navbar />
          </div> */}
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              {phenomena.map((phenomenon) => (
                <Route
                  key={phenomenon.id}
                  path={`/${phenomenon.id}`}
                  element={<PhenomenonPage phenomenon={phenomenon} />}
                />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;