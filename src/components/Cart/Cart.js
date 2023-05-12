import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carro vacio</h1>
                <link to='/' className="Option">Productos</link>
            </div>
        )
    }
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>

            <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" onClick={() => clearCart()} className="btn btn-secondary">Limpiar carrito</button>
                <button type="button" className="btn btn-secondary">
                <Link to='/checkout' className="Option">Finalizar Compra</Link>
            </button>                
            </div>

            
            
        </div>
    )
}
export default Cart