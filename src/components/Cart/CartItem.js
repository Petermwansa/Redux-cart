import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch()


  const { title, quantity, total, price, id } = props.item;

  const removeItemToCartHandler = () => {
    // the removeitem dispatch action needs an id as a payload 
    dispatch(cartActions.removeItemFromCart(id))
  }

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,          //we wrote just price and not "price: price" because the key and the value are equal in spelling
    }))
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemToCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
