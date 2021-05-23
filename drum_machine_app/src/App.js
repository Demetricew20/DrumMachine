import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DrumPad from './DrumPad/DrumPad';

function App() {


  return (
    <div style={{justifyContent: 'center', alignContent: 'center'}}>
      <DrumPad />
    </div>
    
  );
}

export default App;
