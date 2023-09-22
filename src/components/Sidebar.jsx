import React from 'react'
import './Sidebar.css';


const Sidebar = ({onAddNote, notes, onDeletenote, activeNote, setAcgtiveNote}) => {
  return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>note</h1>
            <button onClick={onAddNote}>add</button>

        </div>
        <div className='app-sidebar-notes'>
            {notes.map((note) => (
                <div className='app-sidebar-note' key={note.id}>
                    <div className='sidebar-note-title'>
                        <strong>{note.title}</strong>
                        <button onClick={() => onDeletenote(note.id)}>delete</button>
                    </div>
                    <p>{note.content}</p>
                    <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</small>
                </div>
            ))}


        </div>
    </div>
  )
}

export default Sidebar
