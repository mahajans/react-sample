import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/Clock'
import Toggle from "./components/toggle/Toggle";
import FilterableProductTable from "./components/producttable/FilterableProductTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload (which I just did).
        </p>
        <Clock name="Sourabh"/>
        <Toggle />
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];