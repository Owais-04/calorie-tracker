import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CalorieProvider } from './context/CalorieContext';

// Import components
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import FoodLog from './pages/FoodLog';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CalorieProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/log" element={<FoodLog />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CalorieProvider>
    </ThemeProvider>
  );
}

export default App;
