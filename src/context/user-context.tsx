'use client'

import {
  ReactNode,
  createContext,
  useState
} from "react";

import {
  UserDTO
} from "@/dtos/UserDTO";


type IUserContext = {
  user: UserDTO | null,
  setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>
};

export const UserContext = createContext<IUserContext | null>(null);

type UserContextProviderProps = {
  children: ReactNode;
  user: UserDTO | null
};

export function UserContextProvider({ children, user }: UserContextProviderProps) {

  const [userState, setUser] = useState<UserDTO | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

