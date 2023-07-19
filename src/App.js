import { useState } from 'react';
import './App.css';
import CreateNode from './CreateNode';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';


function App() {
  const [addItem, setAddItem] =useState([]);

  const addNote = (note) =>{
     alert("Im clicked");
     setAddItem((prevData) => {
      return [...prevData, note];
     });
     
  };
   
  const onDelete = (id) =>{
     setAddItem ((olddata) =>
     
     olddata.filter((currdata, index) =>{
         return index !== id;
     })
     );
  };


  return (
    <div >
    <Header/>
    <CreateNode  passNote={addNote} />
    <Note />

    {addItem.map((val, index) => {
      return <Note 
        key={index}
        in={index}
        title={val.title}
        content={val.content}
        deleteItem = {onDelete}
      />
    })
    }
    <Footer />

     </div>
  );
}

export default App;
