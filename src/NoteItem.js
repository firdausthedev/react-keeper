import React from 'react';

function NoteItems(props) {
  return <div className="items"><p>{props.title}</p><p>{props.content}</p></div>
}

export default NoteItems;