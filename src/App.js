import FruitImage from "./FruitImage";
import SearchBar from "./SearchBar";
import NutritionText from "./NutritionText";
import FunFact from "./FunFact";

function App() {
  return (
    <div className="App">
      <FruitImage></FruitImage>
      <SearchBar></SearchBar>
      <NutritionText></NutritionText>
      {/* {<FunFact></FunFact>} */}
    </div>
  );
}

export default App;
