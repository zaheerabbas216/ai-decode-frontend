import React, { useState } from "react";
import "./styles.scss";
import { ImagesList } from "../../assets/images/imageslist";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CarouselComponent = () => {
  const [count, setCount] = useState(0);

  let carouselimages = [ImagesList.carouselimage, ImagesList.carouselimagetwo];
  const totalImages = carouselimages.length;

  console.log("carouselimages", carouselimages);

  const nextimage = () => {
    setCount((prevCount) => (prevCount + 1) % totalImages); // Wrap around to first image if reaching the end
    console.log("clicked on the next image");
  };

  const previmage = () => {
    setCount((prevCount) => (prevCount - 1 + totalImages) % totalImages); // Wrap around to last image if reaching the beginning
    console.log("clicked on the prev image");
  };

  console.log("the count value is", count);

  return (
    <>
      <div className="position-relative">
        <div className="carouseldiv">
          <img src={carouselimages[count]} alt="" className="carouselimage_" />
        </div>
        <button className="carousel_btn_left" onClick={nextimage}>
          <FaAngleLeft />
        </button>
        <button className="carousel_btn_right" onClick={previmage}>
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default CarouselComponent;
