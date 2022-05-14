import FruitImage from "./FruitImage";
//import SearchBar from "./SearchBar";
import SearchAgainButton from "./SearchAgainButton";
import useFruitData from "./Hooks/useFruitData";
import useFruitFunFact from "./Hooks/useFruitFunFacts";
import useFruitImage from "./Hooks/useFruitImage";
import NutritionText from "./NutritionText";
import FunFact from "./FunFact";
import { useRef, useState } from "react";
import FruitData from "./Hooks/FruitData";

function App() {
  const [fruit, setFruit] = useState("banana");
  const fruitData = useFruitData(fruit);
  const fruitFact = useFruitFunFact(fruit);
  const fruitImage = useFruitImage(fruit);

  // Invalid fruit if undefined
  if (fruitData === undefined) {
    console.log(`No fruit data for ${fruit}`);
  }

  if (fruitFact === undefined) {
    console.log(`No fruit fact for ${fruit}`);
  }

  if (FruitImage === undefined) {
    console.log(`No fruit image for ${fruit}`);
  }

  const inputEl = useRef();

  const onButtonClick = () => {
    setFruit(inputEl.current.value);
  };
  return (
    <div className="App">
      <FruitImage></FruitImage>

      {/* search functionality */}
      <div className="container flex mx-auto">
        <div className="flex-none rounded w-full my-8 text-center ">
          <button
            className="flex-none items-center justify-center px-4 border-r"
            onClick={onButtonClick}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input
            ref={inputEl}
            type="text"
            className="px-4 py-2 w-1/2"
            placeholder="Search..."
          />
        </div>
      </div>
      {fruitData === undefined ? (
        "Nothing"
      ) : (
        <NutritionText {...fruitData}></NutritionText>
      )}
      <FunFact></FunFact>
      <SearchAgainButton></SearchAgainButton>
    </div>
  );
}

export default App;
