import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import SliderItem from './Features/SliderItem';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';



class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Features/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;