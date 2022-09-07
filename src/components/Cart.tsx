import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Link to="/CartPage">
      <AiOutlineShoppingCart />
    </Link>
  )
}

export default Cart
