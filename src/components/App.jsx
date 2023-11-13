import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import { notes } from '../notes'


function createNotes(noteItem) {
  return <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
}

export default function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  )
}
