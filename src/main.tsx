import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import ToolpadDashboardLayout from './layout/ToolpadDashboardLayout';
import { PokedexPage } from './pages/PokedexPage';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { FavoritesPage } from './pages/FavoritesPage';
import ReactDOM from 'react-dom/client';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const queryClient = new QueryClient();

const navigation = [
  { segment: '', title: 'Pokédex', icon: <CatchingPokemonIcon /> },
  { segment: 'favorites', title: 'Favorites', icon: <FavoriteBorderIcon /> },
];

const routes = [
  {
    element: (
      <ReactRouterAppProvider
        navigation={navigation}
        branding={{
          title: 'Pokédex',
          logo: '',
        }}
      >
        <Outlet />
      </ReactRouterAppProvider>
    ),
    children: [
      {
        element: <ToolpadDashboardLayout />,
        children: [
          { path: '/', element: <PokedexPage /> },
          { path: '/favorites', element: <FavoritesPage /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
