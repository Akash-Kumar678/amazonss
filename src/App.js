import './App.css';
import Header from './sitecomponents/Header';
import Footer from './sitecomponents/Footer';
import ProdCatlog from './sitecomponents/ProdCatlog';
import Home from './sitecomponents/Home'
import Login from './sitecomponents/Login';
import Payment  from './sitecomponents/Payment'
import Orders from './sitecomponents/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Checkout from './sitecomponents/Checkout';
import React , {Component} from 'react';


function App() {
  const [show,setshow] =  React.useState(true)

  return (
    <>
      <Header/>
     
      
    
{/*



*/}
        
         <Routes> 
          <Route exact path='/' element={<Home/>} exact />
        <Route path='/order' element={<Orders/>}  />
            
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/products" element={<ProdCatlog/>}/>
          <Route path="/payment" element={<Payment/>}/>
          </Routes>
          
          <Footer/>
        </>

    
  );
}

export default App;
