import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className='UI'>
        <ErrorBoundary>
          <Hero hero="Anantha" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero="Abhijith" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
