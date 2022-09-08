import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removedFromCart } from '../store/countries'
import type { RootState, AppDispatch } from '../store/configureStore'

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cartElements = useSelector((state: RootState) => state.cart)

  return (
    <>
      <div>
        {cartElements.map((element) => (
          <div key={element.name.common}>
            <h4>
              {element.name.common}
              <button onClick={() => dispatch(removedFromCart(element))}>
                Remove
              </button>
            </h4>
          </div>
        ))}
      </div>
      <h4>
        <Link to="/">Go Back</Link>
      </h4>
    </>
  )
}

export default CartPage
