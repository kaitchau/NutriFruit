import FruitImage from "./FruitImage";
import SearchBar from "./SearchBar";
import NutritionText from "./NutritionText";
import FunFact from "./FunFact";
import SearchAgainButton from "./SearchAgainButton";
import useFruitData from "./Hooks/useFruitData";
import useFruitFunFact from "./Hooks/useFruitFunFacts";
import useFruitImage from "./Hooks/useFruitImage";

function App() {
  const fruit = "banana";
  const fruitData = useFruitData(fruit);
  const fruitFact = useFruitFunFact(fruit);
  const fruitImage = useFruitImage(fruit);

  // Invalid fruit if undefined
  if (fruitData === undefined) {
    console.log(`No fruit data for ${fruit}`);
  } else {
    console.log(fruitData);
  }

  if (fruitFact === undefined) {
    console.log(`No fruit fact for ${fruit}`);
  } else {
    console.log(fruitFact);
  }

  if (FruitImage === undefined) {
    console.log(`No fruit image for ${fruit}`);
  } else {
    console.log(fruitImage);
  }

  return (
    <div className="App">
      <FruitImage></FruitImage>
      <SearchBar></SearchBar>
      <NutritionText></NutritionText>
      <FunFact></FunFact>
      <SearchAgainButton></SearchAgainButton>
    </div>
  );
}

export default App;
