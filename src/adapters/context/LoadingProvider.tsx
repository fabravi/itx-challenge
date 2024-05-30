import { createContext, useContext, useState } from 'react';

interface LoadingContextState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextState>({
  loading: false,
  setLoading: () => {},
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
