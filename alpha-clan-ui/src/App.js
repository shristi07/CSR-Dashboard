

import React from "react";
import {Provider} from "react-redux";
import store from "./AppStore/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Routers from "../src/components/Routes/Route";

console.log("!!!!! ----AlphaClanUI-v-0.1.0 ---- !!!!!!");

const App = props => {

  return <Provider store={store}>
    <div id="app-container" className="app">
      <Routers/>
    </div>
  </Provider>;
}

export default App;

