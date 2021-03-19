import "./App.css";
import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes";
import SearchForm from "./components/SearchForm";

const App = () => {
  const App_id = "2319649e";
  const App_key = "0ed2da5b023bc1208644c09818565dd8";

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("chicken");

  console.log(query);

  useEffect(() => {
    console.log("useEffect has been called");
    getRecipes(query);
  }, [query]);

  const getNewRecipe = (recipe) => {
    setQuery(recipe);
  };

  const getRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(true);
  };

  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <SearchForm getNewRecipe={getNewRecipe}/>
      <br />
      <div className="recipes-container">
        {loading
          ? recipes.map((recipe) => {
              return (
                <Recipes
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                />
              );
            })
          : "Loading........"}
      </div>
    </div>
  );
};

export default App;
