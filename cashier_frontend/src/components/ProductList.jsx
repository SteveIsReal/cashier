import { useState, useEffect } from "react"
import './card.css'

export default function ProductList({addWishlist, wishlistProduct}){

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/store/list_product/')
        .then((response) => (response.json()))
        .then((data) => (setProduct(data)))
    }, [])

    return (
        <>
            {product && product.map((item) => (
                <div className="card" key={item.id}>
                    <img className="image" src={item.product_image}></img>
                    <div>
                        <h2 className="title">{item.name}</h2>
                        <p className="title">{item.description}</p>
                    </div>
                    <button className="button" onClick={()=>{addWishlist(item)}}>Add Product</button>
                </div>
            ))}
        </>
    )
}