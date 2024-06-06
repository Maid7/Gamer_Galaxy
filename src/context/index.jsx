import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedGames, setSearchedGames] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  // functionality to get searched game/games
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=b2ad4f7bf28f403e80e2c2bdbfce5824&search=${searchParam}`
      );

      const data = await res.json();

      if (data) {
        setSearchedGames(data);
        setLoading(false);
        setSearchParam("");
        navigate("/searched-games");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  // functionality to add games to favorites

  const handleAddToFavorites = (getCurrentItem) => {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavoritesList(cpyFavoritesList);
  };

  console.log(favoritesList);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        searchedGames,
        setSearchParam,
        handleSubmit,
        handleAddToFavorites,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
