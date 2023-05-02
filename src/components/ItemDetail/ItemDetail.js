import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext (cartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={id, name, price}

        addItem(item, quantity)
    }

    return (
        <>
            <div className="card col-6">
                <img className="card-img" src={img} alt={name}/>
                <div className="card-body">
                    <h4 className="card-title">{category}</h4>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{descripcion}</p>
                </div>
                
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className='btn btn-success'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                    
            </div>
                                
        </>

    )
}
export default ItemDetail