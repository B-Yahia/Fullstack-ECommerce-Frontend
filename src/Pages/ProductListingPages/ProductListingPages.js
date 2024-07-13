import { useEffect, useState } from "react";
import data from "../../Utils/data.json";
import "./ProductListingPages.css";
import { useParams } from "react-router-dom";

import ProductCard from "../../Components/ProductCard/ProductCard";

export default function ProductListingPages() {
  const [products, setProducts] = useState([]);
  const param = useParams();

  useEffect(() => {
    if (param.id) {
      setProducts(
        data.data.products.filter((product) => product.category === param.id)
      );
    } else {
      setProducts(data.data.products);
    }
  }, [param.id]);
  return (
    <div className="page_container">
      <h1 className="page_title">{param.id ? param.id : "All"}</h1>
      <div className="products_cards">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            data-testid={`product-${product.name}`}
          />
        ))}
      </div>
    </div>
  );
}
