import React from "react";

const FruitImage = ({ img }) => {
  return (
    <div className="flex items-center justify-center mt-5">
      <img
        className="object-center"
        src={img}
        alt="Fruit"
        height="300"
        width="400"
      />
    </div>
  );
};

export default FruitImage;
