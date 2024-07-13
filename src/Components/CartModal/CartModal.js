import { useSelector } from "react-redux";
import "./CartModal.css";
import OrderlineCard from "../OrderlineCard/OrderlineCard";

export default function CartModal() {
  const cart = useSelector((state) => state.cart.order);
  const total = useSelector((state) => state.cart.orderTotal);
  return (
    <div className="modal_container">
      <div className="modal_overlay"></div>
      <div className="modal_content">
        <div className="cart_modal_container">
          <div className="cart_modal_title">
            <h3>My bag</h3>

            {cart.length > 1 ? (
              <p>{cart.length} Items </p>
            ) : (
              <p> {cart.length} Item</p>
            )}
          </div>
          <div className="orderline_cadrs_container">
            {cart.map((orderLine, index) => (
              <OrderlineCard
                key={index}
                orderLine={orderLine}
                className="orderLine_card"
              />
            ))}
          </div>
          <div className="cart_total">
            <p className="cart_total_price">Total</p>
            <p className="cart_total_price" data-testid="cart-total">
              $ {total}
            </p>
          </div>
          <button className="place_order" disabled={cart.length === 0}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
