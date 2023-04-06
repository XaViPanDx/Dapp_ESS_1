export const initialState = {
    artifact: null,
    web3: null,
    accounts: [],
    networkID: null,
    contract: null,
  };
  
  export const actions = {
    init: "INIT",
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case actions.init:
        return {
          ...state,
          ...action.data,
        };
      default:
        return state;
    }
  }
  