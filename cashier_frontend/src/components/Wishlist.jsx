export default function Wishlist({wishlistProduct}){
    return (
        <>
            <h1>Wish list {wishlistProduct.length }</h1>
            <ul>
                {wishlistProduct && wishlistProduct.map((item) => (
                    <li key={Math.random()}>{item.name} x{item.quantity}</li>
                ))}
            </ul>

            <button type="submit">Cash out</button>
        </>
    )
}