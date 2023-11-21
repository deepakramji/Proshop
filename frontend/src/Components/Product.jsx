import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`product/${product._id}`}></Link>
      <Card.Img src={product.image} variant="Top" />

      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
            <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text>
            <h3>₹{product.price}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
