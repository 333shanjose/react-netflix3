import React from 'react'
import './App.css'
import Banner from './Components/Banner/banner'
import {action,adventure} from './url'
import Navbar from "./Components/Navbar/Navbar"
import RowPoster from './Components/RowPost/RowPoster'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster url={action} title="action"/>
     <RowPoster url={adventure} title="adventure" isSmall/>
    </div>
  )
}

export default App



        


