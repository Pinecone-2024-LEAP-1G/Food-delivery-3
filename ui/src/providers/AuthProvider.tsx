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

  // useEffect(() => {
  //   const user = localStorage.getItem("userid");
  //   if (user) {
  //     const parsedUser = JSON.parse(user);
  //     setCurrentUser(parsedUser);
  //   }
  //   setIsLoading(false);
  // }, [isLoading, currentUser]);

  const signin = async (_id: string) => {
    localStorage.setItem("userid", JSON.stringify(_id));
    setCurrentUser(_id);
    setIsLoading(false);
  };

  return (
    <Authcontext.Provider value={{ currentUser, signin, isLoading }}>
      {children}
    </Authcontext.Provider>
  );
};
