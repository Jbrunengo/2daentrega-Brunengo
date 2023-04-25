import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {
    return (
        <>
            <div class="card">
                <img class="card-img-top" src={img} alt={name}/>
                    <div class="card-body">
                        <h4 class="card-title">{category}</h4>
                        <p class="card-text">{descripcion}</p>

                    </div>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
        </>

    )
}
export default ItemDetail