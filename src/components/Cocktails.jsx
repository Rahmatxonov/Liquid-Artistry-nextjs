import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cocktails.css";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        );
        setCocktails(response.data.drinks || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cocktails">
      <h1>Cocktails</h1>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <div>
              <h2>{cocktail.strDrink}</h2>
              <p>{cocktail.strInstructions}</p>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cocktails;
