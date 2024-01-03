import { useState } from "react";
import axios from "axios";

const App = () => {
    const [person, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])

    const App3 = () => {
        const promise = axios.get('http://localhost:3000/notes')
        
        return <h1>AXIOS</h1>
      
      };

    const [newName, setNewName] = useState('')
    return(
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input />
                </div>
                <div>
                    <button type ="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
        </div>
    )
}
export default App
