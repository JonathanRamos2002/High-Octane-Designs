import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import NotesPage from './pages/NotesPage.jsx'
import { toast } from 'react-hot-toast'

const App = () => {
  return (
    <div className="relative h-full w-full"> 
      {/* <button onClick={() => toast.success('Hello World!')} className='text-red-500 p-4 bg-pink-300'>Show Toast</button> */}
      {/* with daisyui */}
      {/* <button onClick={() => toast.success('Hello World!')} className='btn btn-outline'>click me</button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
