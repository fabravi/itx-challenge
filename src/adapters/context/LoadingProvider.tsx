import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  loading: false,
  // eslint-disable-next-line
  setLoading: (loading: boolean) => {},
});

type LoaderProviderProps = {
  children: React.ReactNode;
};

export const LoadingProvider = ({ children }: LoaderProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
