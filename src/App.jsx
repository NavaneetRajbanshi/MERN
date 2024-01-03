import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [ShowAll, setShowAll] = useState(true)
}
const useEffect= () => {
  console.log("effect")
  axios
  .get('http://localhost:3000/notes')
  return <h1>AXIOS</h1>
};
export default App; 