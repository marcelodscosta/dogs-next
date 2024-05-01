import { UserContext } from "@/context/user-context";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if(context === null){
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
}