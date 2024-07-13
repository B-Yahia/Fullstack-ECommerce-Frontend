import { useState } from "react";
import SlideBtn from "../../../Images/CaretLeft.svg";

export default function ProductGallery(props) {
  const [selectedImg, setSelectedImg] = useState(0);

  const incIndex = () => {
    if (props.gallery.length - 1 === selectedImg) {
      setSelectedImg(0);
    } else {
      setSelectedImg(selectedImg + 1);
    }
  };
  const decIndex = () => {
    if (selectedImg === 0) {
      setSelectedImg(props.gallery.length - 1);
    } else {
      setSelectedImg(selectedImg - 1);
    }
  };
  return (
    <div data-testid="product-gallery" className="product-gallery">
      <div className="product_images">
        {props.gallery.map((img, index) => (
          <img
            src={img}
            className={
              index === selectedImg
                ? "product_images_item selected"
                : "product_images_item"
            }
            key={index}
            onClick={() => setSelectedImg(index)}
            alt=""
          />
        ))}
      </div>
      <div className="selected_image_container">
        <img
          src={SlideBtn}
          className="slide_btn right_btn"
          onClick={incIndex}
          alt=""
        />
        <img
          src={SlideBtn}
          className="slide_btn left_btn"
          onClick={decIndex}
          alt=""
        />
        <img
          src={props.gallery[selectedImg]}
          className="selected_image"
          alt=""
        />
      </div>
    </div>
  );
}
