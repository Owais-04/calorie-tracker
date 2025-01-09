import React from 'react';
import { 
  ListItem, 
  ListItemText, 
  IconButton, 
  Typography,
  Grid 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCalories } from '../context/CalorieContext';
import { FoodEntry as FoodEntryType } from '../types';

interface FoodEntryProps {
  entry: FoodEntryType;
}

const FoodEntry: React.FC<FoodEntryProps> = ({ entry }) => {
  const { removeEntry } = useCalories();

  return (
    <ListItem
      secondaryAction={
        <IconButton 
          edge="end" 
          aria-label="delete"
          onClick={() => removeEntry(entry.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">{entry.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                {entry.calories} cal
              </Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <Typography variant="body2" color="text.secondary">
            P: {entry.protein}g | C: {entry.carbs}g | F: {entry.fat}g
          </Typography>
        }
      />
    </ListItem>
  );
};

export default FoodEntry; 