import { useState, useEffect } from "react";
import FruitFunFacts from "./FruitFunFacts";

const useFruitFunFacts = (fruitName) => {
  fruitName = fruitName.toLowerCase();

  const [data, setData] = useState(undefined);

  const found = FruitFunFacts[fruitName];

  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useFruitFunFacts;
