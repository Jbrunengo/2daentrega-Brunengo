import { useContext } from "react"
import { CartContext } from '../../context/CartContext.js'
import './CartItem.css'

const CartItem = ({ id, name, Precio, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>Item: {name}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text">Cantidad: {quantity}</p>
                    <p className="card-text">Precio: ${Precio}</p>
                    <p className="card-text">Sub Total: ${Precio * quantity}</p>
                    <button className="btn btn-danger" onClick={handleRemove}>Eliminar</button>
                </div>
            </div>
            
        </div>
    )

}

export default CartItem
