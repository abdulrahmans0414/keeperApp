import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

import CreateArea from './CreateArea'


export default function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })

  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      <Note
        key={1}
        title="Note title"
        content="Note content"
      />

      <Footer />
    </div>
  )
}
