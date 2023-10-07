import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalReset from './styles/GlobalReset';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import AppRouter from './routes/AppRouter';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalReset />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
