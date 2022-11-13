// create your App component here
import { useState, useEffect } from "react";

function App() {
  const [dogPics, setDogPics] = useState(null)


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogPics(data.message))
  }, []);
  
  if (!dogPics) return <p>Loading...</p>
  return <img src={dogPics} alt="A Random Dog" />
}

export default App;