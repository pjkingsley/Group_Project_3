import React, { useState, useEffect, Component } from 'react'
// import axios from 'axios'
import './App.css';

//main components---------------------->
import Header from './components/ui/Header'
import NavBar from './components/ui/Nav-Bar'
import Main from './components/ui/Main'

class App extends Component { 
  render(){
    return (    
    <div className="body-container">
        <Header/>
        <NavBar/>
        <div id="main-body"> 
            <Main/>
        </div>
    </div>)

}
}
export default App;


// const App = () => {
//   const [data, setData] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [query, setQuery] = useState('')

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true)
//       const result = await axios(
//         `https://www.breakingbadapi.com/api/characters?name=${query}`
//       )

//       console.log(result.data)

//       setData(result.data)
//       setIsLoading(false)
//     }

//     fetchData()
//   }, [query])

//   return (
//     <div className='container'>
//       <Header />
//       <Search getQuery={(q) => setQuery(q)} />
//       <CharacterGrid isLoading={isLoading} data={data} />
//     </div>
//   )
// }

// export default App