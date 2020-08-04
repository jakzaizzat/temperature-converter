import React from 'react';
import Container from "./components/Container";
import TemperatureSwitcher from "./components/TemperatureSwitcher";

function App() {
  return (
      <Container>
          <h1 className="text-center font-semibold text-5xl text-copy-primary">Temperature Converter</h1>
          <p className="text-center text-copy-secondary text-lg mb-16">Take home test for Peatix Front End Developer</p>
          <TemperatureSwitcher/>
      </Container>
  );
}

export default App;
