import React from 'react';

import { Header } from "./components/header";
import { H1 } from "./components/text";
import { Wrap, ContainerFluid, Card, Container } from "./components/content";
import { Search, Button } from "./components/form";

function App() {
  
  return (
    <div className="App">
      <Header>
        <Wrap>
          <H1>IEX</H1>
          <Search />
          <Button>Buscar</Button>
        </Wrap>
      </Header>
      <ContainerFluid>
        
      </ContainerFluid>
      <Container>

      </Container>
    </div>
  );
}

export default App;
