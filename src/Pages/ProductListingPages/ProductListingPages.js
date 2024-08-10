import "./ProductListingPages.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../GraphQL/queries";

export default function ProductListingPages() {
  const param = useParams();
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { category: param.id },
  });
  if (loading)
    return (
      <div className="page_container">
        <p>Loading</p>
      </div>
    );
  if (error)
    return (
      <div className="page_container">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="page_container">
      <h1 className="page_title">{param.id ? param.id : "All"}</h1>
      <div className="products_cards">
        {data &&
          data.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
