import React from 'react';
import GlobalReset from './styles/GlobalReset';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <>
      <GlobalReset />
      <ThemeProvider theme={Theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
