import React, { createContext, useState } from 'react';
import { GithubUserType } from '../App';

interface UserContextProps {
  user: GithubUserType | null;
  setUser: (user: GithubUserType | null) => void;
  
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

const UserContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<GithubUserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextProvider };