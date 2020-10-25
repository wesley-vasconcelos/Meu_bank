import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Initial from "../screens/initial";
import Home from "../screens/home";
import Menu from "../screens/menu";
import { useSelector, useDispatch } from "react-redux";
import { AsyncStorage } from "react-native";
import { requestAccessSuccess } from "../redux/user";
import SignIn from "../screens/signIn";

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#fff",
    },
  };
  // const {
  //   user: { data },
  // } = useSelector((value) => value);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   AsyncStorage.getItem("user").then((res) =>
  //     dispatch(requestAccessSuccess(JSON.parse(res)))
  //   );
  // }, []);

  // const initialRoute = () => {
  //   if (!!data && !!data?._id) {
  //     return "Home";
  //   }
  //   return "Initial";
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" initialRouteName="Initial">
        <Stack.Screen name="Login" options={defaultOptions} component={Login} />
        <Stack.Screen
          name="Initial"
          options={defaultOptions}
          component={Initial}
        />
        <Stack.Screen name="Home" options={defaultOptions} component={Home} />
        <Stack.Screen name="Menu" options={defaultOptions} component={Menu} />
        <Stack.Screen
          name="SignIn"
          options={defaultOptions}
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
