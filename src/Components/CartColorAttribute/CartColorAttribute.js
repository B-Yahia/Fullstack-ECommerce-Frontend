import "./CartColorAttribute.css";

export default function CartColorAttribute(props) {
  const index = props.selectedAttr.findIndex(
    (item) => item.attributeId === props.attr.id
  );
  return (
    <div className="cart_attribute_container">
      <h2 className="cart_attribute_title"> {props.attr.name}</h2>
      <div className="cart_attribute_items">
        {props.attr.items.map((item) => (
          <div
            className={
              item.id === props.selectedAttr[index].attributeItem.id
                ? "cart_attribute_item selected"
                : "cart_attribute_item"
            }
            key={item.id}
            style={{ backgroundColor: item.value }}
          ></div>
        ))}
      </div>
    </div>
  );
}
