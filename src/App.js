import "./App.css";
import React, { useEffect, useState } from "react";
import * as api from "./api/api";
import Recipes from "./components/Recipes";
import SearchForm from "./components/SearchForm";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("chicken");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    getRecipes(query);
  }, [query]);

  const getNewRecipe = (recipe) => {
    setQuery(recipe);
  };

  const getRecipes = async (query) => {
    const response = await api.fetchRecipes(query);
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(true);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="App">
      <Header />
      <SearchForm getNewRecipe={getNewRecipe}/>
      <br />
      <div className="recipes-container">
        {loading ? (
          currentPosts.map((recipe) => {
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
        ) : (
          <Loader />
        )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={recipes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
