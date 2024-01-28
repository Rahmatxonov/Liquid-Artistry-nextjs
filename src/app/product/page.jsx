import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const fullCocktailInfo = response.data.drinks[0];
        setCocktail(fullCocktailInfo);
      } catch (error) {
        console.error("Error fetching full cocktail info:", error);
      }
    };

    if (id) {
      fetchCocktail();
    }
  }, [id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default ProductPage;

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [cocktail, setCocktail] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCocktail = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
//         );
//         const fullCocktailInfo = response.data.drinks
//           ? response.data.drinks[0]
//           : null;
//         setCocktail(fullCocktailInfo);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching full cocktail info:", error);
//         setError(error.message || "Error fetching data");
//         setLoading(false);
//       }
//     };

//     const { id: routeId } = router.query;
//     if (routeId && routeId !== id) {
//       // Routerning ma'lumotlari yangilangan
//       fetchCocktail();
//     } else {
//       setLoading(false);
//     }
//   }, [id, router.query.id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!cocktail) {
//     return <div>No data found</div>;
//   }

//   return (
//     <div>
//       <h2>{cocktail.strDrink}</h2>
//       <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//       <p>{cocktail.strInstructions}</p>
//     </div>
//   );
// };

// export default ProductPage;
