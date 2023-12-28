import axios from "axios";

const App = () => {
  const promise = axios.get('http://localhost:3000/notes')
  console.log(promise);
  return <h1>AXIOS</h1>

};
export default App; 