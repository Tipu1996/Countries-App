import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removedFromCart } from '../store/cart';
import { useEffect, useState } from 'react';

const CartPage = () => {
    const dispatch = useDispatch()
    const cartElements = useSelector((state) => state.cart.cart);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        setElements(cartElements)
    }, [cartElements])

    return (
        <>
            <div>
                {elements.map(element =>
                    <div key={element.name.common}>
                        <h4>{element.name.common}
                            <button onClick={() => dispatch(removedFromCart(element))} >
                                Remove
                            </button>
                        </h4>

                    </div>

                )}
            </div>
            <h4><Link to="/">Go Back</Link></h4>
        </>
    )
}

export default CartPage