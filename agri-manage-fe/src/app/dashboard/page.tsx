import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        農產品管理後台
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">庫存管理</Typography>
            <Button variant="contained" color="primary">
              查看庫存
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">銷售管理</Typography>
            <Button variant="contained" color="primary">
              查看銷售
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
