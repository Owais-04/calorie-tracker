import React from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be positive')
    .integer('Age must be an integer'),
  weight: yup
    .number()
    .required('Weight is required')
    .positive('Weight must be positive'),
  height: yup
    .number()
    .required('Height is required')
    .positive('Height must be positive'),
  targetCalories: yup
    .number()
    .required('Target calories is required')
    .positive('Target calories must be positive'),
});

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      weight: '',
      height: '',
      targetCalories: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Save to localStorage
      localStorage.setItem('userProfile', JSON.stringify(values));
      alert('Profile updated successfully!');
    },
  });

  React.useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      formik.setValues(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Profile Settings
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="age"
                label="Age"
                type="number"
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="weight"
                label="Weight (kg)"
                type="number"
                value={formik.values.weight}
                onChange={formik.handleChange}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={formik.touched.weight && formik.errors.weight}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="height"
                label="Height (cm)"
                type="number"
                value={formik.values.height}
                onChange={formik.handleChange}
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={formik.touched.height && formik.errors.height}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="targetCalories"
                label="Daily Calorie Target"
                type="number"
                value={formik.values.targetCalories}
                onChange={formik.handleChange}
                error={formik.touched.targetCalories && Boolean(formik.errors.targetCalories)}
                helperText={formik.touched.targetCalories && formik.errors.targetCalories}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Save Profile
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile; 