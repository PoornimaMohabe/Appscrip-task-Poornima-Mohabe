import { useEffect, useState } from "react";
import axios from "axios";
import fav from "../assets/images/heart.png";

const Card = ({ fullWidth }) => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(url)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={`Card_Component ${fullWidth ? "full_width" : ""}`}>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-container">
            <img src={product.image} alt="Product" />
          </div>
          <div className="info_container">
            <div className="product-name">PPXOC MILKYWAY DRESS IN...</div>
            <div className="price-row">
              <span>
                <a href="#">Sign in</a> or Create an account to see pricing
              </span>
              <img src={fav} alt="heart" className="heart" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;