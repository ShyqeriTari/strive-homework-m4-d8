import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import CommentArea from "./CommentArea"

const MovieDetails = (props) => {

    const params = useParams()

    const [movie, setMovie] = useState([])

    const mount = async () => {

          let response = await fetch(
            "http://www.omdbapi.com/?apikey=660268d7&i=" + params.movieId
          );
          let data = await response.json();
          setMovie(data)
      
      }

      useEffect(() => {mount()}, [])

    return (
<>      
  {movie &&
      <center>  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text> Genre:  
      {movie.Genre} - Year: {movie.Year}
    </Card.Text>
  </Card.Body>
</Card></center>}
<CommentArea branding={'d-block'} branding2={params.movieId}/>
</>

    )
}

export default MovieDetails