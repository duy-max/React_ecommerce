import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
