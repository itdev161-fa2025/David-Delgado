import React from 'react'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className='App'> 
        <header className='App-header'>
          GoodThings
        </header>
        {this.state.data}
      </div>
    )
  }
}

export default App;
