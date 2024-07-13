import { useDispatch } from "react-redux";
import CartTextAttribute from "../CartTextAttribute/CartTextAttribute";
import CartColorAttribute from "../CartColorAttribute/CartColorAttribute";
import { decreaseUnits, increaseUnits } from "../../ReduxStore/CartSlice";

export default function OrderlineCard(props) {
  const dispatch = useDispatch();
  const increaseQ = (id) => {
    dispatch(increaseUnits(id));
  };
  const decreaseQ = (id) => {
    dispatch(decreaseUnits(id));
  };
  return (
    <div className="orderLine_card">
      <div className="orederline_info">
        <p className="orederline_info_name">{props.orderLine.product.name}</p>
        <p className="orederline_info_price">
          {props.orderLine.product.prices[0].amount} -
          {props.orderLine.product.prices[0].currency.symbol}
        </p>
        {props.orderLine.product.attributes.map((attr, index) =>
          attr.type === "text" ? (
            <CartTextAttribute
              attr={attr}
              selectedAttr={props.orderLine.selectedAttr}
              key={index}
            />
          ) : (
            <CartColorAttribute
              attr={attr}
              selectedAttr={props.orderLine.selectedAttr}
              key={index}
            />
          )
        )}
      </div>
      <div className="orederline_btns">
        <button
          className="orederline_btn"
          onClick={() => increaseQ(props.orderLine.id)}
          data-testid="cart-item-amount-increase"
        >
          +
        </button>
        <p data-testid="cart-item-amount">{props.orderLine.units}</p>
        <button
          className="orederline_btn"
          onClick={() => decreaseQ(props.orderLine.id)}
          data-testid="cart-item-amount-decrease"
        >
          -
        </button>
      </div>
      <div className="orederline_img">
        <img
          className="orederline_img"
          src={props.orderLine.product.gallery[0]}
          alt=""
        />
      </div>
    </div>
  );
}
