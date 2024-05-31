import React from 'react';
import './NoteCard.css';
import DeleteIcon from './delete-icon.png';
import UpdateIcon from './update-icon.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function NoteCard({ _id, title, content, category, loadNotes }) {

  const deleteNote = async () => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${_id}`);
      toast.success(response.data.message);
      loadNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Failed to delete the note.');
    }
  };

  return (
    <div className='note-card'>
      <h3 className='note-card-title'>{title}</h3>
      <p className='note-card-content'>{content}</p>
      <span className='note-card-category'>{category}</span>
      <div className='note-card-actions'>
        <Link to={`/update/${_id}`}>
          <img
            src={UpdateIcon}
            alt='update-icon'
            className='update-icon'
          />
        </Link>
        <img
          src={DeleteIcon}
          alt='delete-icon'
          className='delete-icon'
          onClick={deleteNote}
        />
      </div>
    </div>
  );
}

export default NoteCard;
