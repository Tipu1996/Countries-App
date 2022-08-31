import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/configureStore";

// import store from "./store/store";
// import * as actions from "./store/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//const value = store.getState();
/*
store.dispatch(
  actions.apiCallBegan({
    url: "https://restcountries.com/v3.1/all",
    onSuccess: "countries/countriesReceived",
    //onError: actions.apiCallFailed.type,
  })
);
*/
