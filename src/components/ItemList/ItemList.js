import './ItemList.css'
import Item from '../Item/Item'

const ItemList =  ({products}) =>{
    return(
        <div ClassName= 'ListGroup'>
            {products.map (prod => <Item key={products.id} {...prod} />)}
        </div>
    )
}

export default ItemList