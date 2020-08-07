import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';
import { GlobalContext } from './GlobalState';

export const FavoriteClickCountContext = createContext();

export const FavoriteClickCountProvider = ({ children }) => {
  const { incrementFavoriteClickCount } = useContext(GlobalContext);

  const value = useMemo(() => {
    return { incrementFavoriteClickCount };
  }, []);

  return (
    <FavoriteClickCountContext.Provider value={value}>
      {children}
    </FavoriteClickCountContext.Provider>
  );
};
