import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/80 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Exploring the wonders of the cosmos through science and imagination.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/black-holes" className="hover:text-white transition-colors">
                  Black Holes
                </Link>
              </li>
              <li>
                <Link to="/quantum-entanglement" className="hover:text-white transition-colors">
                  Quantum Phenomena
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Cosmic Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;