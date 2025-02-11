import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">
                  CompanyName
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Home
                </Link>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Privacy
                </Link>
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-200"
                >
                  <Download size={20} />
                  <span>Download Now</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;