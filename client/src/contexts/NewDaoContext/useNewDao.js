import { useContext } from "react";
import NewDaoContext from "./NewDaoContext";

const useNewDao = () => {
  const context = useContext(NewDaoContext);
  if (!context) {
    throw new Error("useNewDao must be used within a NewDaoProvider");
  }
  return context;
};

export default useNewDao;
