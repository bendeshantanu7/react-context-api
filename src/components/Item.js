import { useCart } from "../context/Cart";


const Item = (props) => {
    const cart = useCart()
    return (
        <div>
            <h1>{props.name}</h1>
            <span>Price: $ {props.price}</span>
            <button onClick={() => cart.setItem([...cart.item, {name: props.name, price: props.price}])}>Add to cart</button>
        </div>
    )
}

export default Item;