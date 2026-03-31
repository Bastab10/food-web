import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");

  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`,
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam("");
      }

      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function HandleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem, "getCurrentItem");
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id,
    );
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index, 1);
    }
    setFavoritesList(cpyFavoritesList); 
  }

  console.log(favoritesList, 'favoritesList');

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        HandleAddToFavorites,
        favoritesList,
        
      }}
    >
      {" "}
      {children}
    </GlobalContext.Provider>
  );
}
