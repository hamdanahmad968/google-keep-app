import React, { useState } from "react";
import Header from "./Header";
import Createnote from "./Createnote";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  const [Item, addItem] = useState([]);

  const addNote = (Note) => {
    addItem((preValue) => {
      return [...preValue, Note];
    });
  };

  const onDelete = (id) => {
    addItem((preValue) =>{
     return preValue.filter((currdata, index) => {
        return index !== id;
      })
  });
  };

  return (
    <>
      <Header />
      <Createnote passNote={addNote} />
      {Item.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
