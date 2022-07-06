import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Page } from '@/components/Page/Page';
import { DefaultLayout } from '@/layouts/DefaultLayout/DefaultLayout';
import { AppGlobalStyle, AppRoot } from './App.styles';
import { Games } from './pages/Games/Games';
import { Genres } from './pages/Genres/Genres';
import { Game } from './pages/Game/Game';

const queryClient = new QueryClient();

const Dumb = () => {
  return (
    <div>
      <p>This application is a simple application developped with React and Typescript.</p>
      <p>It's a simple project to test RAWG API</p>
    </div>
  );
};

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppGlobalStyle />
      <AppRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page layout={DefaultLayout} component={Dumb} />} />
            <Route path="/games" element={<Page layout={DefaultLayout} component={Games} />} />
            <Route path="/games/:id" element={<Page layout={DefaultLayout} component={Game} />} />
            <Route path="/genres" element={<Page layout={DefaultLayout} component={Genres} />} />
          </Routes>
        </BrowserRouter>
      </AppRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
