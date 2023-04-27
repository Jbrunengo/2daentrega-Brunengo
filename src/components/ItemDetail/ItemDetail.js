import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useEstate } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useEstate(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        <>
            <div class="card">
                <img class="card-img-top" src={img} alt={name} />
                <div class="card-body">
                    <h4 class="card-title">{category}</h4>
                    <p class="card-text">{price}</p>
                    <p class="card-text">{descripcion}</p>
                </div>
                
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                    
            </div>
                                
        </>

    )
}
export default ItemDetail