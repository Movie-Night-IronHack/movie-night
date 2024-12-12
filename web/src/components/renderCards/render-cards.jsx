import { useEffect } from 'react';
import * as MovieApi from '../../services/api-service'

function RenderCards() {
 useEffect(()=>{
    MovieApi.trendingMovies()
        .then((movies)=> console.log(movies))
 },[])

  return (
    <>
      <h2>Render Cards</h2>
    </>
  );
}
export default RenderCards;
