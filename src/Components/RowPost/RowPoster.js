import {React,useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPoster.css'
import axios from '../../axios'

import {imageUrl,API_KEY} from '../../constants/constants'

function RowPoster(props) {
  const [movies,setMovies]=useState([])
  const [urlId,seturlId]=useState('')
   useEffect(()=>{
     axios.get(props.url).then((response)=>{
       
       setMovies(response.data.results)
     })
     
   },)
    const opts={
      height:"398",
      width:"100%",
      playervars:{
        //https://developers.google.com/youtube/player_parameters
        autoplay:1,
      },
    }
    const handle= (id)=>{
      console.log(id)
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          console.log(response.data.results)
          if(response.data.results.length!==0){
          seturlId(response.data.results[0])
          }else{
            console.log("array empty")
          }
        })
    }
   
   
   
   
  return (
    <div className="row">
        <h1>{props.title}</h1>
     <div className="posters">
        {movies.map((obj)=>
         <img onClick={()=>handle(obj.id)} className={props.isSmall ?"smallposter" :"poster"} alt="posters"   src={`${imageUrl+obj.backdrop_path}`} />
         )} 
     </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
  }


export default RowPoster;