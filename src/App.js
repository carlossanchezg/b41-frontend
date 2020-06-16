import React from 'react';
import Navigation from './Components/Navigation';
import Prueba from './Components/Prueba'
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Navigation />
        <h1>Hola Mundo</h1>
        <Prueba />
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
