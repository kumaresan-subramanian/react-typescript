import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { Login } from './components/Login';
import { Counter } from './components/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
function App() {
  return (
    <div className="App">
      <Greet name='KumarJack' messageCount={20} isLoggedIn={true}></Greet>
      <Status status='loading'></Status>
      <Heading>from heading children</Heading>
      <Oscar><Heading>from Ocar children</Heading></Oscar>
      <Button handleClick={(event, id) => {console.log('clicked', event, id)}}>Click me</Button>
      <Input value='' handleChange={event => console.log(event)}></Input>
      <Container styles={{color: 'red', border:'1px solid black', padding:'1em'}}></Container>
      <Login></Login>
      <Counter></Counter>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
}

export default App;


// Use types in application
//Use interfacfes in libraries