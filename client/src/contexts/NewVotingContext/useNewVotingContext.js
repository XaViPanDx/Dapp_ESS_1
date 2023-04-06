import { useContext } from "react";
import NewVotingContext from "./NewVotingContext";

const useNewVotingContext = () => {
  const context = useContext(NewVotingContext);

  if (!context) {
    throw new Error(
      "useNewVotingContext must be used within a NewVotingProvider"
    );
  }

  return context;
};

export default useNewVotingContext;
