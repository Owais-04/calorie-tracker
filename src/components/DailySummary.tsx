import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { useCalories } from '../context/CalorieContext';

const DailySummary = () => {
  const { entries } = useCalories();
  
  const today = new Date().toISOString().split('T')[0];
  const todayEntries = entries.filter(entry => 
    entry.date.startsWith(today)
  );

  const totals = todayEntries.reduce((acc, entry) => ({
    calories: acc.calories + entry.calories,
    protein: acc.protein + (entry.protein || 0),
    carbs: acc.carbs + (entry.carbs || 0),
    fat: acc.fat + (entry.fat || 0),
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Today's Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Calories
            </Typography>
            <Typography variant="h6">
              {totals.calories}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Protein
            </Typography>
            <Typography variant="h6">
              {totals.protein}g
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Carbs
            </Typography>
            <Typography variant="h6">
              {totals.carbs}g
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Fat
            </Typography>
            <Typography variant="h6">
              {totals.fat}g
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DailySummary; 