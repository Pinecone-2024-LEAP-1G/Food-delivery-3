"use client";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "sonner";

type User = {
  email: string;
} | null;

const UserContext = createContext<User | null>(null);
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  // const getUser = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   if (!token) {
  //     toast.error("token alga");
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/users/me",
  //       { email: "tuul@gmail.com" },
  //       {
  //         headers: { authorization: `Bearer ${token}` },
  //       }
  //     );

  //     setUser(response.data);
  //   } catch (error) {
  //     toast.error("User not authenticated");
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
