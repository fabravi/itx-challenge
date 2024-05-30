import { RouterProvider } from 'react-router-dom';
import { router } from '@/adapters/router/routes';
import { LoadingProvider } from '@/adapters/context/LoadingProvider';

export const App = () => {
  return (
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  );
};
