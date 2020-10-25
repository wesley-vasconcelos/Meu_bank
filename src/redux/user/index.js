import { handleActions, createActions } from "redux-actions";

export const REQUEST_ACCESS = "REQUEST_ACCESS";
export const REQUEST_ACCESS_SUCCESS = "REQUEST_ACCESS_SUCCESS";

export const {
  requestAccess,
  requestAccessSuccess,
  requestAccessError,
} = createActions({
  [REQUEST_ACCESS]: (data) => data,
  [REQUEST_ACCESS_SUCCESS]: ({ user }) => ({ user }),
});

export const CREATE_ACCESS = "CREATE_ACCESS";
export const CREATE_ACCESS_SUCCESS = "CREATE_ACCESS_SUCCESS";

export const { createAccess, createAccessSuccess } = createActions({
  [CREATE_ACCESS]: (data) => data,
  [CREATE_ACCESS_SUCCESS]: ({ user }) => ({ user }),
});

export const LIST_PURCHASE = "LIST_PURCHASE";
export const LIST_PURCHASE_SUCCESS = "LIST_PURCHASE_SUCCESS";

export const { listPurchase, listPurchaseSuccess } = createActions({
  [LIST_PURCHASE]: (data) => data,
  [LIST_PURCHASE_SUCCESS]: (data) => data,
});

export const REQUEST_LOGOUT_USER = "REQUEST_LOGOUT_USER";

export const { requestLogoutUser } = createActions({
  [REQUEST_LOGOUT_USER]: (data) => data,
});

export const INITIAL_STATE = {
  data: {},
  listPurchase: [],
};
const reducer = handleActions(
  {
    [REQUEST_ACCESS_SUCCESS]: (state, { payload: { user } }) => {
      return { ...state, data: user };
    },
    [LIST_PURCHASE_SUCCESS]: (state, { payload }) => {
      return { ...state, listPurchase: payload };
    },
    [REQUEST_LOGOUT_USER]: () => {
      return INITIAL_STATE;
    },
  },
  INITIAL_STATE
);

export default reducer;
