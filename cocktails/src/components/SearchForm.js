import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const searchValue = useRef('');
  const searchCocktail = () =>{
      setSearch(searchValue.current.value);
  }
  const handleSubmit = (e) =>{
     e.preventDefault();
  }
  useEffect(()=>{
    searchValue.current.focus();
  })
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit} >
         <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" ref={searchValue} onChange={searchCocktail} />
         </div>
      </form>
    </section>
  )
}

export default SearchForm
