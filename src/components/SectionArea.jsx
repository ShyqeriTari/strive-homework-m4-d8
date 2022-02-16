import { useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { useLocation } from 'react-router-dom'

const SectionArea = (props) => {
  // state = {
  //   movie:[],
  //   id: undefined,
  // };

  const location = useLocation()
  console.log(location.pathname)

  const [movie, setMovie] = useState([])

  const [id, setId] = useState(undefined)

  const changeId = (str) => {
    setId(str) 
  }

const mount = async() => {
let fetches = location.pathname === '/tv-shows' ? " http://www.omdbapi.com/?apikey=660268d7&s=" + props.branding + '&type=series' : "http://www.omdbapi.com/?apikey=660268d7&s=" + props.branding 

    let response = await fetch(
      fetches
    );
    let data = await response.json();
    setMovie(data.Search)
    props.function(id)

}

useEffect(() => {mount()}, [props.branding])

 
  

  // componentDidUpdate = async (prevProps, prevState) => {
  //   if(prevProps !== this.props){
  //     this.setState({ ...this.state,movie: [] });
  //   let response = await fetch(
  //     "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.branding
  //   );
  //   let data = await response.json();
  //   console.log(data.Search);
  //   this.setState({ ...this.state, movie: data.Search });
  //   }
  // };

    return (
      <div
        className="container-fluid mb-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}

      >
        <h1 className="text-white">{props.branding}</h1>
        <Row >
{movie.filter((movie, idx) => idx < 6).map(movie => (

<SingleMovie onClick={(e) => props.function(id)} function={changeId}  branding={movie}/>
)
  )}
          
        </Row>
      </div>
    );
  
}

export default SectionArea;
