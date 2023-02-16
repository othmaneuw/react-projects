import React from 'react';

const Menu = ({menuItems}) => {
  return <section>
    <h2> {menuItems.length} item </h2>
    {menuItems.map(item => {
      const {id,title,price,img,desc,category} = item;
      return(
        <article key={id}>
          <img src={img} alt={title} width="200px" height="200px" />
          <h4 className='title'>{title}</h4>
          <h4 className='price'>{price}</h4>
          <p>{desc}</p>
        </article>
      )
    })}
  </section>;
};

export default Menu;
