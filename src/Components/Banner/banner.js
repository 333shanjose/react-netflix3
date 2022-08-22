import React, { useEffect,useState} from 'react'
import './banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'


function Banner() {
  const[movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
      
  },[])

  return (
    <div 
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className="banner">
        <div className="content">
            <h1 className="titile">{movie ? movie.title : ""}</h1>
           <div className="banner-button">
             <button className="button">play</button>
             <button className="button">my list</button>
           </div>
            <h1 className="description">{movie ?movie.overview :""}</h1>
        </div>
        <div className="fade_bottom">

        </div>


    </div>
  )
}

export default Banner