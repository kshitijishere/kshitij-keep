import './App.css';
import React from 'react';
import Header from './header.js';
import TakeNote from './takenote';
class App extends React.Component{
render(){
  return(
    <>
    <Header/>
    <TakeNote/>
    </>
  );
}
}


export default App;
