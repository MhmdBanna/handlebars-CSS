import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/routes';
import React from 'react';

function App() {
  const routing = useRoutes(Router);

  return (
    <>
      <CssBaseline />
      <>{routing}</>
    </>
  );
}

export default App;
