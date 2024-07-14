import { toKebabCase } from "../../Utils/functions";
import "./CartTextAttribute.css";

export default function CartTextAttribute(props) {
  const index = props.selectedAttr.findIndex(
    (item) => item.attributeId === props.attr.id
  );
  return (
    <div
      className="cart_attribute_container"
      data-testid={`cart-item-attribute-${toKebabCase(props.attr.name)}`}
    >
      <h2 className="cart_attribute_title">{props.attr.name}</h2>
      <div className="cart_attribute_items">
        {props.attr.items.map((item) => (
          <div
            className={
              item.id === props.selectedAttr[index].attributeItem.id
                ? "cart_attribute_item_text selected"
                : "cart_attribute_item_text"
            }
            data-testid={
              item.id === props.selectedAttr[index].attributeItem.id
                ? `cart-item-attribute-${toKebabCase(
                    props.attr.name
                  )}-${toKebabCase(item.value)}-selected`
                : `cart-item-attribute-${toKebabCase(
                    props.attr.name
                  )}-${toKebabCase(item.value)}`
            }
            key={item.id}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
