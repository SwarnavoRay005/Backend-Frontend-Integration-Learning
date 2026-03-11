import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { getProduct } from "../services/productService.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await getProduct();
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Products</h1>

      <Link to="/create">
        <button className="add-product-btn">Add Product</button>
      </Link>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            refresh={fetchProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;