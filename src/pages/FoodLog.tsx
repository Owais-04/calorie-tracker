import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  List, 
  Divider 
} from '@mui/material';
import { useCalories } from '../context/CalorieContext';
import FoodEntry from '../components/FoodEntry';
import DailySummary from '../components/DailySummary';

const FoodLog = () => {
  const { entries } = useCalories();

  // Sort entries by date (most recent first)
  const sortedEntries = [...entries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <DailySummary />
      <Paper>
        <Typography variant="h6" sx={{ p: 2 }}>
          Food Log
        </Typography>
        <List>
          {sortedEntries.map((entry, index) => (
            <React.Fragment key={entry.id}>
              <FoodEntry entry={entry} />
              {index < sortedEntries.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default FoodLog; 