// src/app/about/page.tsx
import React from 'react';
import Navbar from '../components/NavBar';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
      <p>This is about us.</p>
    </div>
  );
};

export default AboutPage;