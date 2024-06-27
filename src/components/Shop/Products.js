import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  { 
    id: 'p1', 
    price: 60, 
    title: "My best book", 
    description: "The best book that I have ever written"
  },
  { 
    id: 'p2', 
    price:57, 
    title: "My second best book", 
    description: "The second best book that I have ever written"
  },
  { 
    id: 'p3', 
    price: 51, 
    title: "My third best book", 
    description: "The third best book that I have ever written"
  },
  { 
    id: 'p4', 
    price: 46, 
    title: "My fourth best book", 
    description: "The fourth best book that I have ever written"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))
        }

      </ul>
    </section>
  );
};

export default Products;
