import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import { notes } from '../notes'
import CreateArea from './CreateArea'


export default function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map(noteItem => ( 
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  )
}
