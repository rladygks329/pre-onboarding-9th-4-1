import Router from './router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
