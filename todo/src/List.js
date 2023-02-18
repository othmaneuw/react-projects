import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items,removeItem,editItem}) => {
  return <section>
     {items.map(item=>{
      const {id,title} = item;
      return <article key={id} className='grocery-item'>
        <p>{title}</p>
        <div className="button-container">
          <button className='edit-btn' onClick={()=>editItem(id)} >
            <FaEdit />
          </button>
          <button className='delete-btn' onClick={()=>removeItem(id)} >
            <FaTrash />
          </button>
        </div>
      </article>
     })}
  </section>
}

export default List
