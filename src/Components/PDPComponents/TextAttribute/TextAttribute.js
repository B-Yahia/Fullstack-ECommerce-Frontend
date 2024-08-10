import { useEffect, useState } from "react";
import { AddAttribute } from "../../../ReduxStore/AttributesSlice";
import "./TextAttribute.css";
import { useDispatch, useSelector } from "react-redux";
import { toKebabCase } from "../../../Utils/functions";

export default function TextAttribute(props) {
  const ListOfSelectedAtteributes = useSelector(
    (state) => state.attributes.list
  );
  const [selectedAttrOptionId, setSelectedAttrOptionId] = useState("");
  const index = ListOfSelectedAtteributes.findIndex(
    (item) => item.attributeSet.id === props.attr.id
  );

  const dispatch = useDispatch();
  const addSelection = (attributeSet, attribute) => {
    const data = {
      attributeSet: attributeSet,
      attribute: attribute,
    };
    dispatch(AddAttribute(data));
  };
  useEffect(() => {
    if (index === -1) {
      setSelectedAttrOptionId(NaN);
    } else {
      setSelectedAttrOptionId(props.selectedAttr[index].attribute.id);
    }
  }, [ListOfSelectedAtteributes, index, props.selectedAttr]);
  return (
    <div
      className="attribute_container"
      data-testid={`product-attribute-${toKebabCase(props.attr.name)}`}
    >
      <h2>{props.attr.name}</h2>
      <div className="attribute_items">
        {props.attr.items.map((item) => (
          <button
            onClick={() => addSelection(props.attr, item)}
            className={
              item.id === selectedAttrOptionId
                ? "selected_attribute_item_text"
                : "attribute_item_text"
            }
            key={item.id}
            data-testid={`product-attribute-${toKebabCase(props.attr.name)}-${
              item.displayValue
            }`}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
