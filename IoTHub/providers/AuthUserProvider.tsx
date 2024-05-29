import React, { useState, createContext } from 'react';
import { User } from 'firebase/auth';

export type AuthenticatedUserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const AuthenticatedUserContext =  React.createContext<AuthenticatedUserContextType | undefined>(undefined);

export const AuthenticatedUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};