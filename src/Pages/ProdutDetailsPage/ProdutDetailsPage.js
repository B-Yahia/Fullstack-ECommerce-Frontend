import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ProdutDetailsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { EmptyAttributesList } from "../../ReduxStore/AttributesSlice";
import { addProductToCart } from "../../ReduxStore/CartSlice";
import parse from "html-react-parser";
import ColorAttribute from "../../Components/PDPComponents/ColorAttribute/ColorAttribute";
import TextAttribute from "../../Components/PDPComponents/TextAttribute/TextAttribute";
import ProductGallery from "../../Components/PDPComponents/ProductGallery/ProductGallery";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../GraphQL/queries";

export default function ProdutDetailsPage() {
  const params = useParams();
  const { data } = useQuery(GET_PRODUCT, {
    variables: { id: parseInt(params.id) },
  });
  const dispatch = useDispatch();
  const selectedAttributes = useSelector((state) => state.attributes.list);
  const addProduct = () => {
    const orderLine = {
      product: data.product,
      selectedAttributes: selectedAttributes,
    };
    dispatch(addProductToCart(orderLine));
  };
  useEffect(() => {
    dispatch(EmptyAttributesList());
  }, [dispatch]);
  return (
    <div className="product_page_container">
      {data && (
        <>
          <ProductGallery gallery={data.product.gallery} />
          <div className="product_info">
            <div className="product_info_name">{data.product.name}</div>
            {data.product.attributes.map((attr, index) =>
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
                {data.product.prices[0].currency.symbol}{" "}
                {data.product.prices[0].amount}
              </p>
            </div>

            <button
              className="add_cart_btn"
              disabled={
                selectedAttributes.length !== data.product.attributes.length ||
                !data.product.inStock
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
              {parse(data.product.description)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
