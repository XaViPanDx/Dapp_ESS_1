export const initialState = {
    artifact: null,
    web3: null,
    accounts: [],
    networkID: null,
    contract: null,

    daos: [] //////////////
  };
  
  export const actions = {
    init: "INIT",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {

      case actions.init:
        return {
          ...state,
          artifact: action.data.artifact,
          web3: action.data.web3,
          accounts: action.data.accounts,
          networkID: action.data.networkID,
          contract: action.data.contract,
        };
      
      case actions.addDao:
        return {
          ...state,
          daos: [...state.daos, action.dao],
        };

      case actions.daoCreated:
            return {
              ...state,
              // MAJ DE L ETAT
            };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  