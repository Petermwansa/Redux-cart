import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';



const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();




  const addTocartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id: id,
      title: title,
      price          ///when the key name and the value name are equal, we can omit writing the the key and value but just write once
    }))
  }



  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addTocartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
