import { useCart } from "../context/Cart"

const Cart = () => {
    const cart = useCart();
    const totalBill = cart.item.reduce((a,b) => a + b.price, 0)
    console.log('cart', cart)
    return (
        <div>
            {cart?.item.map((item) => {
                 return (<li key={item.name}>
                    
                    {item.name}
                </li>)
            })}
            <span>Total price: $ {totalBill}</span>
        </div>
    )
}

export default Cart