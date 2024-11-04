"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    const user = localStorage.getItem("id");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
    }
    setIsLoading(false);
  }, [isLoading, currentUser]);

  const signin = async (_id: string) => {
    setCurrentUser(_id);
    localStorage.setItem("id", JSON.stringify(_id));
  };

  return (
    <Authcontext.Provider value={{ currentUser, signin, isLoading }}>
      {children}
    </Authcontext.Provider>
  );
};
