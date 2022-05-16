import React from "react";

const FruitImage = ({ img }) => {
  return (
    <div className="flex items-center justify-center mt-5">
      <img
        //puts the focus of the image on the center
        className="object-center"
        //takes in the variable img for each respective fruit state picture
        src={img}
        alt="Fruit"
        height="300"
        width="400"
      />
    </div>
  );
};

export default FruitImage;
