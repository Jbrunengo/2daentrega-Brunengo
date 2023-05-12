import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
                setCart(prev => [...prev, { ...item, quantity }])
                setTotalQuantity(prev => prev + quantity)
                console.log(item.Precio)
                console.log(quantity)
                setTotal(prev => prev + (item.Precio * quantity))
            } else {
                console.error ('Producto ya agregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.find(prod => prod.id !== itemId)
        setCart(prev => prev.find(prod => prod.id !== itemId))
        setTotalQuantity(prev => prev - cartUpdated.quantity)
        setTotal(prev => prev - cartUpdated.price * cartUpdated.quantity)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}
