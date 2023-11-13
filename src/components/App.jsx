import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

export default function App() {
  return (
    <div>
        <Header/>
        <Note
        title="This is title"
        content="This is a content"
        />
        <Footer/>
    </div>
  )
}
