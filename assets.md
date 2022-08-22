fantacy:"https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}with_genres=14"
imageUrl:"https://image.tmdb.org/t/p/orginal"
action:"https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}with_genres=28"
adventures:"https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}with_genres=12"
const opts={
     height:'398',
     weight:'100%',
     playerVars:{
       //https://developers.google.com/youtube/player_parameters
       autoplay:0
     },
      <Youtube opts={opts} videoId />