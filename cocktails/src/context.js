import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [cocktails,setCocktails] = useState([]);
  const [search,setSearch] = useState('a');
  const fetchData = async () =>{
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      //console.log(data);
      const {drinks} = data;
      if(drinks){
         const newDrinks = drinks.map((item)=>{
          const {idDrink,strDrink,strAlcoholic,strGlass,strDrinkThumb} = item;
          return {id:idDrink,name:strDrink,info:strAlcoholic,glass:strGlass,image:strDrinkThumb}
         })
         setCocktails(newDrinks);
      }else{
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchData();
  },[search]);
  return <AppContext.Provider value={{
    loading,
    cocktails,
    setSearch,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
