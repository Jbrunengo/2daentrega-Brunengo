import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={decrement}>-</button>
                    <button type="button" className="btn btn-secondary">{quantity}</button>
                    <button type="button" className="btn btn-secondary" onClick={increment}>+</button>                    
                </div>                
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )

}
export default ItemCount