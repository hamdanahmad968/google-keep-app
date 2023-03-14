import React from "react";

const Note = (props) => {

  const deleteNote =()=>{
    props.deleteItem(props.id);
  } 
  return (
    <>
      <div className="note" style={{backgroundColor : "#CBEAD9"}}>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>➖</button>
      </div>
    </>
  );
};

export default Note;
