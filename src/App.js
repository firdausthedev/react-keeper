import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Note from "./Note";
import NoteItems from "./NoteItem";

function App() {
  return <div>  
    <Navbar></Navbar>
    <section id="note">
      <NoteItems title="Day 1" content="dsdf"></NoteItems>
      <NoteItems title="Day 2" content="dsdf"></NoteItems>
      <NoteItems title="Day 2" content="dsdf"></NoteItems>
      <NoteItems title="Day 2" content="dsdf"></NoteItems>
      <NoteItems title="Day 2" content="dsdf"></NoteItems>
      <NoteItems title="Day 2" content="dsdf"></NoteItems>
      <NoteItems title="Day 2" content="dsdf"></NoteItems>
      <NoteItems title="Day 3" content="dadasdasd"></NoteItems>
      
    </section>
    <Footer></Footer>
  </div>;
}

export default App;