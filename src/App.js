import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';

class App extends React.Component {
  render() {
    return (
        <div>
          <BookList></BookList>
        </div>
    );
  }
}

export default App;
