import * as React from "react";
import { ThemeProvider } from 'styled-components'
import Navigation from "./src/navigation";
import theme from './theme'
import {Provider} from 'react-redux'
import store from "./src/redux";

const  App = () => {
  console.disableYellowBox = true

  return (
    <Provider store={store} >
    <ThemeProvider theme={theme}>
     <Navigation />
    </ThemeProvider>
    </Provider>
  );
}

export default  App