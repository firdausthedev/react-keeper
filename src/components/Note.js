import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  var title = props.title;
  if (title.length > 15) {
    title = title.substring(0, 15) + "...";
  }
  console.log(title.length);

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
