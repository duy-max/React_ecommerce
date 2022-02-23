import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/products';
import Message from './components/message';
import Cart from './components/cart';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <Products />
            <Cart />
            <Message />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
