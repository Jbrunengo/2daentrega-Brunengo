import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, descripcion, Precio, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={id, name, Precio}

        addItem(item, quantity)
    }

    return (
        <>
            <div className="card col-6">
                <img className="card-img" src={img} alt={name}/>
                <div className="card-body">
                    <h4 className="card-title">{category}</h4>
                    <p className="card-text">{Precio}</p>
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