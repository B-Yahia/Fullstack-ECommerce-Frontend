import { useParams } from "react-router-dom";
import data from "../../Utils/data.json";
import { useEffect, useState } from "react";
import "./ProdutDetailsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { EmptyAttributesList } from "../../ReduxStore/AttributesSlice";
import { addProductToCart, toggleHideBtn } from "../../ReduxStore/CartSlice";
import parse from "html-react-parser";
import ColorAttribute from "../../Components/PDPComponents/ColorAttribute/ColorAttribute";
import TextAttribute from "../../Components/PDPComponents/TextAttribute/TextAttribute";
import ProductGallery from "../../Components/PDPComponents/ProductGallery/ProductGallery";

export default function ProdutDetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedAttributes = useSelector((state) => state.attributes.list);
  const [products] = useState(data.data.products);
  const product = products.find((product) => product.id === params.id);
  const addProduct = () => {
    const orderLine = {
      product: product,
      selectedAttr: selectedAttributes,
    };
    dispatch(addProductToCart(orderLine));
    dispatch(toggleHideBtn());
  };
  useEffect(() => {
    dispatch(EmptyAttributesList());
  }, [dispatch]);
  return (
    <div className="product_page_container">
      <ProductGallery gallery={product.gallery} />
      <div className="product_info">
        <div className="product_info_name">{product.name}</div>
        {product.attributes.map((attr, index) =>
          attr.type === "text" ? (
            <TextAttribute
              attr={attr}
              key={index}
              selectedAttr={selectedAttributes}
            />
          ) : (
            <ColorAttribute
              attr={attr}
              key={index}
              selectedAttr={selectedAttributes}
            />
          )
        )}
        <div className="product_info_price">
          <p className="price_tag">Price:</p>
          <p className="price_tag">
            {product.prices[0].currency.symbol} {product.prices[0].amount}
          </p>
        </div>

        <button
          className="add_cart_btn"
          disabled={
            selectedAttributes.length !== product.attributes.length ||
            !product.inStock
          }
          onClick={addProduct}
          data-testid="add-to-cart"
        >
          ADD TO CART
        </button>

        <div
          className="product_info_description"
          data-testid="product-description"
        >
          {parse(product.description)}
        </div>
      </div>
    </div>
  );
}
