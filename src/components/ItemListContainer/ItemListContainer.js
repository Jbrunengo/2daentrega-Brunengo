import {useState, useEffect} from 'react'    
import { getProducts, getProductsByCategory } from '../../asyncMock'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error);
            })
        }, [])

        return (
            <div>
                <ItemList products={products}/>
            </div>
        )
        }
export default ItemListContainer