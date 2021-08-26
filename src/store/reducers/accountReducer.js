const initialState = 100;

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;