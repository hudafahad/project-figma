 import React from 'react'
 import { Route , Routes } from 'react-router-dom'
 import Products from './page/Products'
 import Home from './page/Home'
 import Navbar from './Component/Navbar'
 import './App.css';
  function App() {
   const ProductsData =[
    { ID: 1 , name : 'Earbuds', price :'500 SAR' , Image :'/images/Earbuds.jpg' },
    { ID: 2 , name : 'Lamp', price :'99 SAR' , Image :'/images/Lamp.jpg'},
    { ID: 3 , name : 'Candle', price :'270 SAR' , Image :'/images/Candle.jpg' },
    { ID: 4 , name : 'Headphones', price :'999 SAR' , Image :'/images/Headphones.jpg' },
    { ID: 5 , name : 'Table Lamp', price :'330 SAR' , Image :'/images/Table Lamp.jpg' },
    { ID: 6 , name : 'Home Decor', price :'1100 SAR' , Image : '/images/Decor.jpg ' },
   ]
   return (
     <div>
      <Navbar/>
      <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/products' element ={<Products products={ProductsData}/>} />
      </Routes>



     </div>
   )
 }
 
export default App ;