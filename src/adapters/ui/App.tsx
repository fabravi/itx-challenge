import { RouterProvider } from 'react-router-dom';
import { router } from '@/adapters/router/routes';

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
