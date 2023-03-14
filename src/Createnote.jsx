import React, { useState } from "react";

const Createnote = (props) => {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((preValue) => {
      return { 
        ...preValue,
        [name]: value,
      };
    });
  };
 
   const InputItem = (event)=>{
    event.preventDefault();
    props.passNote(Note)

    // to empty the input field after pressing add button 
    
    setNote({
      title : "",
      content : ""
    })


   }
    
  return (
    <>
      <div className="main_note"> 
        <form style={{backgroundColor : "#CBEAD9"}}>
          <input 
            type="text"
            placeholder="Title"
            name="title"
            value={Note.title}
            onChange={InputEvent}
            autoComplete="off"
          />
       
          <textarea
          type = "text"
            // rows=""
            // column=""
            placeholder="Write a note..."
            name="content"
            value={Note.content}
            onChange={InputEvent} 
          />
          <button onClick={InputItem}> ➕ </button>
        </form>
      </div>
    </>
  );
};

export default Createnote;
