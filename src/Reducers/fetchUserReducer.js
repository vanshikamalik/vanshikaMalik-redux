import types from "../Actions/types";

const initialState = {
  loading: false,
  user: {},
  error: {}
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.Send_Request:
      console.log("case1");
      return {
        ...state,
        loading: true
      };
    case types.Send_Request_Success:
      console.log("case2");
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: {}
      };
    case action.Send_Request_Failure:
      console.log("case3");
      return {
        ...state,
        user: {},
        loading: false,
        error: action.error
      };
    default:
      console.log("default");
      return state;
  }
};
export default fetchUserReducer;
