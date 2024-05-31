import React, {useState} from 'react'
import axios from 'axios';
import './Home.css'
function Home() {
    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);
        
        console.log(response.data.data);

        setNotes(response.data.data);

    } 

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
