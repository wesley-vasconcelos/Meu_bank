import { handleActions, createActions } from "redux-actions";

export const REQUEST_ACCESS = "REQUEST_ACCESS";
export const REQUEST_ACCESS_SUCCESS = "REQUEST_ACCESS_SUCCESS";
export const REQUEST_ACCESS_ERROR = "REQUEST_ACCESS_ERROR";

export const {
  requestAccess,
  requestAccessSuccess,
  requestAccessError,
} = createActions({
  [REQUEST_ACCESS]: (data) => data,
  [REQUEST_ACCESS_SUCCESS]: ({ user }) => ({ user }),
});

export const INITIAL_STATE = {
  data: {},
  status: {},
};
const reducer = handleActions(
  {
    [REQUEST_ACCESS_SUCCESS]: (state, { payload: { user } }) => {
      return { ...state, data: user };
    },
  },
  INITIAL_STATE
);

export default reducer;
