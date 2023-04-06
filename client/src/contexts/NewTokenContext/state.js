export const initialState = {
    artifact: null,
    web3: null,
    accounts: null,
    networkID: null,
    contract: null,
  };
  
  export const actions = {
    init: "INIT",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actions.init:
        return {
          ...state,
          ...action.data,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  
  