import React from "react";

import { Header } from "./components/styled/header";

import Search from "./components/functional/search";
import  Quote from "./components/functional/quote";
import Graphic from "./components/functional/graphic";

import { H1 } from "./components/styled/text";

function App() {
  return (
    <div className="App">
        <Header>
          <H1>Alphavantage</H1>
          <Search />
        </Header>
        <div>
          <Quote />
          <Graphic />
        </div>
    </div>
  );
}

export default App;