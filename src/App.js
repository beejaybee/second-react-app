import React from 'react';
import './App.css';
import Products from './Product';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Products />
        </header>
      </div>
    );
  }
}
export default App;
