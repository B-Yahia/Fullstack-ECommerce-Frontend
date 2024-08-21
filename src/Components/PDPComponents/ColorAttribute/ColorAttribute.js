import { useEffect, useState } from "react";
import "./ColorAttribute.css";
import { useDispatch, useSelector } from "react-redux";
import { AddAttribute } from "../../../ReduxStore/AttributesSlice";
import { toKebabCase } from "../../../Utils/functions";

export default function ColorAttribute(props) {
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
            className={
              item.id === selectedAttrOptionId
                ? "selected_attribute_item"
                : "attribute_item"
            }
            key={item.id}
            style={{ backgroundColor: item.value }}
            onClick={() => addSelection(props.attr, item)}
            data-testid={`product-attribute-${toKebabCase(props.attr.name)}-${
              item.displayValue
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
