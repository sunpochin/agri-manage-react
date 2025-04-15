"use client"
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            Input Shop Business Line 
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">
            Home
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">
            About Us
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">
            Contact Us
          </Button>
        </Link>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
