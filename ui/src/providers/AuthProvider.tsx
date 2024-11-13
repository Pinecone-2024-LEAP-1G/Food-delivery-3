"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type AuthResponse = {
  accessToken: string;
  user: User;
};

export type User = {
  _id: string;
  userName: string;
  email: string;
};

type Auth = {
  currentUser: AuthResponse | null;
  signin: (_user: AuthResponse) => void;
  isLoading: boolean;
};

const Authcontext = createContext<Auth>({
  currentUser: null,
  signin: () => {},
  isLoading: false,
});

export const useAuthcontext = () => useContext(Authcontext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<AuthResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
    }
    setIsLoading(false);
  }, [isLoading]);

  const signin = async (response: AuthResponse) => {
    localStorage.setItem("user", JSON.stringify(response));

    setCurrentUser(response);
    setIsLoading(false);
  };

  return (
    <Authcontext.Provider value={{ currentUser, signin, isLoading }}>
      {children}
    </Authcontext.Provider>
  );
};
