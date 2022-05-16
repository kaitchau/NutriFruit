import useFruitData from "./hooks/useFruitData";
import useFruitFunFact from "./hooks/useFruitFunFacts";
import useFruitImage from "./hooks/useFruitImage";
import FruitImage from "./components/FruitImage";
import NutritionText from "./components/NutritionText";
import FunFact from "./components/FunFact";
import InvalidFruit from "./components/InvalidFruit";
import { useRef, useState, Fragment } from "react";

function App() {
  //banana is the default fruit, defined below
  const [fruit, setFruit] = useState("banana");
  const fruitData = useFruitData(fruit);
  let fruitFact = useFruitFunFact(fruit);
  const fruitImage = useFruitImage(fruit);

  // Invalid fruit if undefined
  if (fruitData === undefined) {
    console.log(`No fruit data for ${fruit}`);
  }

  // Valid fruit but no fruit facts in data set
  // gives the fruitFact state a "fact"
  if (fruitFact === undefined) {
    console.log(`No fruit fact for ${fruit}`);
    fruitFact = "There are no facts available for this fruit";
  }

  // Valid fruit but no image in data set
  if (FruitImage === undefined) {
    console.log(`No fruit image for ${fruit}`);
  }

  // constant inputEl references the search input
  const inputEl = useRef();

  //set the current fruit to the current value of inputEl from the search bar
  const onButtonClick = () => {
    setFruit(inputEl.current.value);
  };
  return (
    <div className="App">
      {fruitImage === undefined ? (
        <p className="text-center mt-5"> "No Image" </p>
      ) : (
        <FruitImage img={fruitImage}></FruitImage>
      )}

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
              {/* below is the search button image */}
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input
            ref={inputEl}
            type="text"
            className="px-4 py-2 w-1/2 outline outline-[#cecace]"
            placeholder="Search..."
          />
        </div>
      </div>
      {/*Instead of using an array or div to render multiple children components,
      used React Fragment b/c doesn't add extra nodes to DOM (Document Object Model)
      */}
      {fruitData === undefined ? (
        <InvalidFruit></InvalidFruit>
      ) : (
        <Fragment>
          {/* Spreading the fruitData so that they values are separated for use
          instead of a whole object */}
          <NutritionText {...fruitData}></NutritionText>,
          <FunFact facts={fruitFact}></FunFact>,
        </Fragment>
      )}
    </div>
  );
}

export default App;
