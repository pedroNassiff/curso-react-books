import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import  App  from "./App";
import { Provider } from 'react-redux';
import MyReducer from './redux/BookReducer';
import { createStore, compose } from "@reduxjs/toolkit";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( MyReducer, composeEnhancers())

const theme = createTheme();
ReactDOM.render(
  <ThemeProvider theme={theme}>
     <MuiPickersUtilsProvider utils={DayjsUtils}>
      <CssBaseline />
      <Provider store={store}>
      <App />
      </Provider>
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
