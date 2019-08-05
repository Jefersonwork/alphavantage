import React from "react";

import { Header } from "./components/styled/header";

import Search from "./components/functional/search";
import  Quote from "./components/functional/quote";
import Graphic from "./components/functional/graphic";

import { Card } from "./components/styled/content";

function App() {
  return (
    <div className="App">
        <Header>
          <Search />
        </Header>
        <div>
          <Card>
            <Quote />
            <Graphic />
          </Card>
        </div>
    </div>
  );
}

export default App;