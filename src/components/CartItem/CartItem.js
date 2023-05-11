import { useContext } from "react"
import { CartContext} from '../../context/CartContext.js'
import './CartItem.css'

const CartItem = ({ id, name, Precio, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div>
            <h4>Item: {name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {Precio}</p>
            <p>Sub Total: {Precio * quantity}</p>
            <button className="btn btn-danger" onClick={handleRemove}>Eliminar</button>
        </div>
    )

}

export default CartItem
