import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>My App</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
