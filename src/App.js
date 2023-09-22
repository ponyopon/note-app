
import { useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes ] = useState([]) ;
  const [activeNote, setActiveNote] = useState(false)
  const onAddNote = () => {
    const newNote = {
      id:uuid(),
      title : 'new note',
      content : 'new content',
      modDate : Date.now()

    }
    setNotes([...notes, newNote])
  }
  const onDeletenote = (id) =>{
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes)
  }

  return (
    <div className="App">
      <Sidebar 
      onAddNote={onAddNote} 
      notes={notes} 
      onDeletenote={onDeletenote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
       />
      <Main />
    </div>
  );
}

export default App;
