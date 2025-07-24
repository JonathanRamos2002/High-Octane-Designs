import React, { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import api from "../lib/axios.js";


const NotesPage = () => {
  const [isRateLimited, setIsRateLimited] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
        try {
            const res = await api.get("/notes");
            console.log(res.data);
            setNotes(res.data);
            setIsRateLimited(false);
        } catch (error) {
            console.error("Error fetching notes:", error);
            if(error.response?.status === 429) {
                setIsRateLimited(true);
            }
            else {
                toast.error("Failed to fetch notes. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    }
    fetchNotes();
  }, []); 

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NotesPage;
