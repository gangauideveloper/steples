	import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Main">
        <Header/>
        <Footer/>    
      </div>
    );
  }
}

export default App;
