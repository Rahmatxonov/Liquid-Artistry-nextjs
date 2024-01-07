// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./cocktails.css";

// const Cocktails = () => {
//   const [cocktails, setCocktails] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
//         );
//         setCocktails(response.data.drinks || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="Cocktails">
//       <h3 className="Cocktails__title">
//         <b>Cocktails</b> Menu
//       </h3>
//       <ul>
//         {cocktails.map((cocktail) => (
//           <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cocktails;
