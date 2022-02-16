import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class SectionArea extends Component {
  state = {
    movie:[],
    id: undefined,
  };

  changeId = (str) => {
    this.setState({...this.state, id: str})
  }

  componentDidMount = async () => {
    this.setState({ ...this.state,movie: [] });
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.branding
    );
    let data = await response.json();
    console.log(data.Search);
    this.setState({  movie: data.Search });
    this.props.function(this.state.id)

  };
  

  componentDidUpdate = async (prevProps, prevState) => {
    if(prevProps !== this.props){
      this.setState({ ...this.state,movie: [] });
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.branding
    );
    let data = await response.json();
    console.log(data.Search);
    this.setState({ ...this.state, movie: data.Search });
    }
  };
  render() {
    return (
      <div
        className="container-fluid mb-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}

      >
        <h1 className="text-white">{this.props.branding}</h1>
        <Row >
{this.state.movie.filter((movie, idx) => idx < 6).map(movie => (

<SingleMovie onClick={(e) => this.props.function(this.state.id)} function={this.changeId}  branding={movie}/>
)
  )}
          
        </Row>
      </div>
    );
  }
}

export default SectionArea;
