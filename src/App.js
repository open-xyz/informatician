import React from 'react';
import BookList from './components/BookList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
