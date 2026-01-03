import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import Wishlist from './components/Wishlist'
import './App.css'

function App() {

  const [wishlistProduct, setWishlistProduct] = useState([])

  useEffect(()=>{
    console.log(`added wishlist!`)
    console.log(wishlistProduct)
  }, [wishlistProduct])

  const addWishlist = (product) => {
    if ((wishlistProduct.filter((item) => (item.name === product.name))).length === 0){
      product.quantity = 1
      setWishlistProduct([...wishlistProduct, product]) 
    }
    else {
      product.quantity++
      console.log(wishlistProduct.filter((item) => (item.name !== product.name)))
      setWishlistProduct([...(wishlistProduct.filter((item) => (item.name !== product.name))), product])
    }
  }

  return (
    <>
      <nav className='header'>
        <h1>Terrible looking cashier Page</h1>
      </nav>


      <div className='montserrat-thin' style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'start', 'paddingTop':'80px'}}>
        <div className='container productList'>
            <ProductList addWishlist={addWishlist} wishlistProduct={wishlistProduct}/>
        </div>
        <div className='container cashierMenu'>
            <Wishlist wishlistProduct={wishlistProduct}/>
        </div>
      </div>
    </>
  )
}

export default App
