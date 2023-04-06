import { useContext } from "react";
import NewTokenContext from "./NewTokenContext";

const useNewTokenContext = () => {
  const context = useContext(NewTokenContext);

  if (!context) {
    throw new Error("useNewTokenContext must be used within a NewTokenProvider");
  }

  return context;
};

export default useNewTokenContext;
