import React from 'react';
import { Container, Grid } from '@mui/material';
import AddFoodForm from '../components/AddFoodForm';
import DailySummary from '../components/DailySummary';
import CalorieChart from '../components/CalorieChart';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DailySummary />
        </Grid>
        <Grid item xs={12} md={8}>
          <CalorieChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <AddFoodForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 