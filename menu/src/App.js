import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map(item => item.category))];

function App() {
  const [menu,setMenu] = useState(items);
  const [categories,setCategories] = useState(allCategories);
  const filterMenu = (category) =>{
    if(category === 'all'){
      setMenu(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenu(newItems);
  }
  return <section className='section menu'>
    <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories allCategories={allCategories} filterMenu={filterMenu} />
    <Menu menuItems = {menu} />
  </section>;
}

export default App;
