import React, { createContext, ReactNode, useContext, useState } from 'react';

import { JargonLevel } from '../model/JargonLevel';

type JargonLevelContextType = {
    level: JargonLevel;
    setLevel: (level: JargonLevel) => void;
}

const JargonLevelContext = createContext<JargonLevelContextType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode; // Type for children prop
}
  
export const JargonProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [level, setLevel] = useState<JargonLevel>("BEGINNER");

    return (
    <JargonLevelContext.Provider value={{ level, setLevel }}>
    {children}
    </JargonLevelContext.Provider>
    );
};

// Custom hook
export const useJargon = () => {
    const context = useContext(JargonLevelContext);
  if (!context) {
    throw new Error('useJargon must be used within a JargonProvider');
  }
  return context;
}