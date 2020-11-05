import React from 'react';
import './App.css';
import StandardMenu from './StandardMenu';
import FancyMenu from './FancyMenu';
import { MenuItem } from '@material-ui/core';
import { ManagedMenu, ManagedMenuItem } from './ManagedMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StandardMenu />
        <FancyMenu>
          <MenuItem>Bonjour</MenuItem>
          <MenuItem>Goeiendag</MenuItem>
        </FancyMenu>
        <ManagedMenu>
          <ManagedMenuItem>Bonjour</ManagedMenuItem>
          <ManagedMenuItem>Goeiendag</ManagedMenuItem>
        </ManagedMenu>
      </header>
    </div>
  );
}

export default App;
