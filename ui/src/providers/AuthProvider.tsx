"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Auth = {
  currentUser: string | null;
  signin: (_id: string) => void;
  isLoading: boolean;
};

const Authcontext = createContext<Auth>({
  currentUser: null,
  signin: () => {},
  isLoading: false,
});

export const useAuthcontext = () => useContext(Authcontext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const user = localStorage.getItem("userid");
  //   if (user) {
  //     const parsedUser = JSON.parse(user);
  //     setCurrentUser(parsedUser);
  //   }
  //   setIsLoading(false);
  // }, [isLoading, currentUser]);

  const signin = async (_id: string) => {
    localStorage.setItem("useid", JSON.stringify(_id));
    console.log(
      "Local storage after setting ID:",
      localStorage.getItem("useid")
    );
    setCurrentUser(_id);
    setIsLoading(false);
  };

  return (
    <Authcontext.Provider value={{ currentUser, signin, isLoading }}>
      {children}
    </Authcontext.Provider>
  );
};
