import { AsyncStorage } from "react-native";
import { createLogic } from "redux-logic";
import { requestAccessSuccess, REQUEST_ACCESS } from ".";

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

const configureUserLogics = () => {
  return [handleRequestAccessLogic()];
};

export default configureUserLogics;
