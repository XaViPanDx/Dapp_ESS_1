import { useContext } from "react";
import DaoFactoryContext from "./DaoFactoryContext";

const useDaoFactory = () => {
  const context = useContext(DaoFactoryContext);
  if (!context) {
    throw new Error("useDaoFactory must be used within a DaoFactoryProvider");
  }

  return context;
};

export default useDaoFactory;

