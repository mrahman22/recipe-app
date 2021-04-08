

const App_id = "2319649e";
const App_key = "0ed2da5b023bc1208644c09818565dd8";

export const fetchRecipes = (query) => {
  return fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`
  );
};
