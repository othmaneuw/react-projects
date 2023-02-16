import React from 'react';

const Categories = ({allCategories,filterMenu}) => {
  return <div className='btn-container'>
        {allCategories.map((category,index) =><button
           key={index}
           className='filter-btn'
           onClick={()=>filterMenu(category)}
        >{category}</button>)}
  </div>;
};

export default Categories;
