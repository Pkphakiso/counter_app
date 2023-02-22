import logo from './logo.svg';
import React, { Component } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Counters from './components/counters/counters';
import Footer from './components/footer/footer';
import Navigation from './components/nav/Navigation';

class App extends Component {
  state = { 
    counters:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ] 
  }; 

  handleReset = ()=>{ 
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c; 
    });
    this.setState({ counters}); 
  }; 

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    counters[index].value++;
    this.setState({counters});

  };

  handleDelete = (countId) => {
    const counters = this.state.counters.filter( count => count.id !== countId);
    this.setState({counters});
  };

  render(){
    return (
      <React.Fragment> 
        <Navigation 
        totalCounters={ this.state.counters.filter(c => c.value > 0).length }/>
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          /> 
        </main>
        <Footer />
      </React.Fragment>  
    );
  } 
}

export default App;
