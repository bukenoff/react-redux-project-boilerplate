import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { ThingsStore } from './things.store';

interface StoresContextType {
  things_store: ThingsStore;
}

const StoresContext = createContext<StoresContextType>({} as StoresContextType);

export const StoresProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  const things_store = new ThingsStore();

  return (
    <StoresContext.Provider value={{ things_store }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = (): StoresContextType => useContext(StoresContext);
