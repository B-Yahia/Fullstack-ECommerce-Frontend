import logo from "../../Images/Logo.svg";
import cart from "../../Images/Cart.svg";
import data from "../../Utils/data.json";
import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleHideBtn } from "../../ReduxStore/CartSlice";

export default function Header() {
  const [categories] = useState(data.data.categories);
  const cartItemsCount = useSelector((state) => state.cart.order.length);
  const dispatch = useDispatch();
  return (
    <div className="header_container">
      <nav className="header_menu">
        {categories.map((category, index) => (
          <NavLink
            className="header_menu_option"
            key={index}
            to={category.name}
            data-testid="category-link"
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
      <div className="header_logo">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div
        className="header_cart_container"
        onClick={() => dispatch(toggleHideBtn())}
        data-testid="cart-btn"
      >
        <img className="cart" src={cart} alt="" />
        {cartItemsCount > 0 && (
          <p className="cart_items_count">{cartItemsCount}</p>
        )}
      </div>
    </div>
  );
}
