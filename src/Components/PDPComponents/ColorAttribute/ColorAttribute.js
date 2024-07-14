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
    (item) => item.attributeId === props.attr.id
  );
  const dispatch = useDispatch();
  const addAttr = (attrId, selectedAttr) => {
    const data = {
      attributeId: attrId,
      attributeItem: selectedAttr,
    };
    dispatch(AddAttribute(data));
  };
  useEffect(() => {
    if (index === -1) {
      setSelectedAttrOptionId(NaN);
    } else {
      setSelectedAttrOptionId(props.selectedAttr[index].attributeItem.id);
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
          <div
            className={
              item.id === selectedAttrOptionId
                ? "selected_attribute_item"
                : "attribute_item"
            }
            key={item.id}
            style={{ backgroundColor: item.value }}
            onClick={() => addAttr(props.attr.id, item)}
          ></div>
        ))}
      </div>
    </div>
  );
}
