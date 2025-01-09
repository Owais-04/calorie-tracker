import React from 'react';
import { Line } from 'react-chartjs-2';
import { Paper, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useCalories } from '../context/CalorieContext';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CalorieChart = () => {
  const { entries } = useCalories();

  // Process data for the last 7 days
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  const dailyCalories = last7Days.map(date => {
    const dayEntries = entries.filter(entry => entry.date.startsWith(date));
    return dayEntries.reduce((sum, entry) => sum + entry.calories, 0);
  });

  const data = {
    labels: last7Days.map(date => new Date(date).toLocaleDateString()),
    datasets: [
      {
        label: 'Calories',
        data: dailyCalories,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Calorie Intake - Last 7 Days',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Calorie Trends
      </Typography>
      <Line data={data} options={options} />
    </Paper>
  );
};

export default CalorieChart; 