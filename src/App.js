import React from 'react'
import './App.css'
import Banner from './components/banner/banner'
import {action,adventure} from './url'
import Navbar from "./components/Navbar/Navbar"
import RowPoster from './components/RowPoster/RowPoster'
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



        


