import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link , useHistory } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      //console.log(data);
      if (data.drinks) {
        const {
          strDrink: name,
          strCategory: category,
          strDrinkThumb: image,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        setCocktail({name,image,glass,category,ingredients});
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const history = useHistory();
  const handleClick = () =>{
      history.push('/');
  }
  useEffect(() => {
    fetchCocktail();
  }, []);
  if(loading){
    return <Loading />
  }
  if(!cocktail){
    return <p>No drink found</p>
  }
  const {name,ingredients,glass,image,category} = cocktail;
  return (
    <section className="section cocktail-section">
      <button onClick={handleClick}>Back Home</button>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
      </div>
      <div className="drink-info">
        <p>
          <span className="drink-data">name : </span>
          {name}
        </p>
        <p>
          <span className="drink-data">glass : </span>
          {glass}
        </p>
        <p>
          <span className="drink-data">category : </span>
          {category}
        </p>
        <p>
          <span className="drink-data">ingredients : </span>
          {ingredients.map((item,index)=>{
            return item ? <span key={index}>{item}</span> : null;
          })}
        </p>
      </div>
    </section>
  );
};

export default SingleCocktail;
