import React from 'react';
import './App.css';
import MyPage from './components/main-page/MainPage';
import TextMain from './components/text-main/TextMain';
import ControlledCarousel from './components/carousel/Carousel';
import OptionsList from './components/options-list/OptionsList';
import Form from './components/form/Form';
import FooterMain from './components/footer-main/FooterMain';
import Contact from './components/contact/Contact';
import Payments from './components/payments/Payments';
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  render(){
      return (
<div className="App">
  <div className="container-fluid hidden-sm-down">
      <Navbar/>
  </div>
      <TextMain />
      <ControlledCarousel /> 
      <MyPage />
      <div className="container">
      <OptionsList />
      </div>
      <div className="w-100">
      <Form/>
      </div>
      <div className="w-100">
      <FooterMain/>
  </div>
  <div className="w-100">
      <Contact/>
  </div>
  <div className="container">
      <Payments/>
  </div>
  
    
</div>
  
  );
      }

}
export default App;