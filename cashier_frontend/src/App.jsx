import { useState } from 'react'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  return (
    <>
      <nav className='header'>
        <h1>Terrible looking cashier Page</h1>
      </nav>


      <div className='montserrat-thin' style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'start', 'paddingTop':'80px'}}>
        <div className='container productList'>
            <ProductList />
        </div>
        <div className='container cashierMenu'>
          <h1>Another one</h1>
        </div>
      </div>
    </>
  )
}

export default App
