import React, { Component } from "react";
import Header from "./components/Header";

import info from './services/getInfo';



async function getInfo() {
  await info;
  info.then(val => console.log(val));
}

getInfo();

const App = () => (
  <div className="App">
    <Header/>
  </div>
);

export default App;
