import { AsyncStorage } from "react-native";
import { createLogic } from "redux-logic";
import {
  CREATE_ACCESS,
  listPurchaseSuccess,
  requestAccessSuccess,
  REQUEST_ACCESS,
  LIST_PURCHASE,
} from ".";

export const handleRequestAccessLogic = () => {
  return createLogic({
    type: REQUEST_ACCESS,
    process({ action: { payload } }, dispatch, done) {
      fetch("https://api-teste-wesley.herokuapp.com/auth/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then(async ({ user }) => {
          dispatch(requestAccessSuccess({ user }));
          await AsyncStorage.setItem("user", JSON.stringify(user));
        })
        .catch((error) => console.log(";>", error))
        .finally(done);
    },
  });
};

export const handleAccessLogic = () => {
  return createLogic({
    type: CREATE_ACCESS,
    process({ action: { payload } }, dispatch, done) {
      fetch("https://api-teste-wesley.herokuapp.com/auth/register", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then(async ({ user }) => {
          dispatch(requestAccessSuccess({ user }));
          await AsyncStorage.setItem("user", JSON.stringify(user));
        })
        .catch((error) => console.log(";>", error))
        .finally(done);
    },
  });
};

export const handleListPurchase = () => {
  return createLogic({
    type: LIST_PURCHASE,
    process({ action: { payload } }, dispatch, done) {
      fetch(`https://api-teste-wesley.herokuapp.com/auth/list/${payload}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(listPurchaseSuccess(res));
        })
        .catch((error) => console.log(";>", error))
        .finally(done);
    },
  });
};
const configureUserLogics = () => {
  return [
    handleRequestAccessLogic(),
    handleAccessLogic(),
    handleListPurchase(),
  ];
};

export default configureUserLogics;
