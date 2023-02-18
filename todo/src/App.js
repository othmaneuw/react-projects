import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () =>{
  const list = localStorage.getItem('list');
  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
}

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editID,setEditID] = useState(null);

  const showAlert = (show=false,type='',msg='') =>{
    setAlert({show,type,msg});
}

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('hello');
    if (!name) {
      //Display Alert
      //setAlert({show:true,msg:'Please enter a value',type:'danger'})
      showAlert(true,'danger','Please enter value');
    } else if (name && isEditing) {
      showAlert(true,'success','item edited');
      setList(list.map(item =>{
        if(item.id === editID){
          return {...item,title:name}
        }
        return item;
      }));
      setName('');
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true,'success','Item added');
    }
    
  };

   const clearList = () =>{
    showAlert(true,'danger','Empty List');
    setList([]);
   }

   const removeItem = id =>{
    showAlert(true,'danger','Item Removed');
    setList(list.filter(item=> item.id !== id));
   }

   const editItem = id =>{
    setEditID(id);
    setIsEditing(true);
    const specificItem = list.find(item => item.id === id);
    setName(specificItem.title);
   }

   useEffect(()=>{
       localStorage.setItem('list',JSON.stringify(list));
   },[list])

  return (
    <section className="section-center">
      <div className="grocery-form">
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <div className="form-control">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Write something"
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
      </div>
      {list.length > 0 && (
        <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList} >Clear Items</button>
      </div>
      )}
    </section>
  );
}

export default App;
