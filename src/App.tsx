import { useState } from 'react'

import './App.css'
import axios from 'axios'

interface Types{
  value: string
}


function App() {
  const [data, setDatas] = useState<Types | null> (null)


function fetchpiadas (){

  axios.get <Types>('https://api.chucknorris.io/jokes/random').then((res) => setDatas(res.data)).catch(console.error);
}

console.log(data)

  return (
    <>
      
      {data && <h1>{data.value}</h1> || <h2>falhou</h2>}
    <button onClick={fetchpiadas}>update</button>
    </>
  )
}

export default App
