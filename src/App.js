import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome</h1>
        <BookList />
        <Footer />
      </div>
    );
  }
}

export default App;
