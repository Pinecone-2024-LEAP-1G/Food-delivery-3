"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type User = {
  _id: string;
  userName: string;
  email: string;
};

type Auth = {
  currentUser: User | null;
  signin: (_user: User) => void;
  isLoading: boolean;
};

const Authcontext = createContext<Auth>({
  currentUser: null,
  signin: () => {},
  isLoading: false,
});

export const useAuthcontext = () => useContext(Authcontext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
    }
    setIsLoading(false);
  }, [isLoading]);

  const signin = async (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));

    setCurrentUser(user);
    setIsLoading(false);
  };

  return (
    <Authcontext.Provider value={{ currentUser, signin, isLoading }}>
      {children}
    </Authcontext.Provider>
  );
};
