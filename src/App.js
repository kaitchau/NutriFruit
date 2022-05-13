import FruitImage from "./FruitImage";
import SearchBar from "./SearchBar";
import NutritionText from "./NutritionText";
import FunFact from "./FunFact";
import SearchAgainButton from "./SearchAgainButton";

function App() {
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
