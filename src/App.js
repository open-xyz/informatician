import React from 'react';
import BookList from './components/BookList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <BookList />
      </div>
    );
  }
}

export default App;