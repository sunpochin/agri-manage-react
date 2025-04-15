// src/app/page.tsx
"use client"
import React from 'react';
import Navbar from './components/NavBar';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" color="white" fontWeight="bold" mb={3}>
            Quality Agricultural Input Solutions
          </Typography>
          <Typography variant="h5" color="white" mb={4}>
            A professional supplier of fertilizers and agrochemicals, providing comprehensive support for your agricultural production.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" textAlign="center" mb={6}>
            Our Professional Services
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" spacing={4}>
            <Box sx={{ width: { xs: '100%', md: '30%' }, mb: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1592982551947-0bb97d651bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Fertilizer Products"
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Quality Fertilizers
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Offering a variety of high-efficiency organic and chemical fertilizers to ensure crops receive balanced nutrition and promote healthy growth.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '30%' }, mb: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1574144113084-b6f450cc5e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Agrochemical Products"
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Professional Agrochemicals
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Safe and effective agrochemical products that help farmers effectively control pests and diseases, ensuring crop yield and quality.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '30%' }, mb: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Technical Services"
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Professional Guidance
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Our expert team provides technical guidance and solutions to assist farmers in selecting the most suitable products and usage methods.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Sales Models Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" mb={6}>
            Flexible Sales Models
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Cash Sales"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    Cash Sales
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Providing instant purchase options, allowing customers to quickly obtain the necessary agricultural inputs while enjoying professional services and competitive prices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Input Loan Sales"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    Input Loan Sales
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Providing input loan solutions for farmers to help address funding shortages, supporting agricultural production with flexible repayment options.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Digital Solution Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" textAlign="center" mb={6}>
          Advantages of Digital Solutions
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Automated Product Management", desc: "Streamlining product catalog maintenance, ensuring prices and inventory are updated in real-time." },
            { title: "Sales Tracking", desc: "Comprehensive monitoring of transactions, providing detailed sales data analysis." },
            { title: "Inventory Control", desc: "Real-time inventory monitoring, automatic restocking reminders, reducing the risk of stockouts." },
            { title: "Loan Repayment Tracking", desc: "Simplifying loan management processes, automatically recording repayment status." },
            { title: "Customer and Supplier Management", desc: "Centralized management of all customer and supplier information, enhancing service quality." },
            { title: "Reporting and Compliance Tracking", desc: "Automatically generating various reports to ensure business compliance." }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          py: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" mb={3}>
            Start Using Our Professional Agricultural Input Services
          </Typography>
          <Typography variant="body1" mb={4}>
            Whether you are a shareholder, non-shareholder farmer, or individual farmer, we can provide you with the highest quality products and services.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Contact Us Now
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Agricultural Input Supplier. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;