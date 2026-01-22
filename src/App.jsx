import React from 'react'
import './app.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/Note.jsx'
import Resume from './components/windows/Resume.jsx'

const App = () => {
  return (
  <main>
    <Nav />
    <Dock />

    <Github/>
    <Note />

    <Resume/>
  </main>
  )
}

export default App