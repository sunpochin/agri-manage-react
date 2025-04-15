// src/app/contact/page.tsx
import React from 'react';
import Navbar from '../components/NavBar';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>聯繫我們</h1>
      <p>這裡是聯繫我們的方式。</p>
    </div>
  );
};

 export default ContactPage;