// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
