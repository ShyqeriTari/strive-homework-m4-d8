import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class SectionArea extends Component {

  render() {
    return (
      <div
        className="container-fluid mb-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
      >
        <h1>Title</h1>
        <Row>

<SingleMovie branding={this.props.Poster}/>          
        </Row>
      </div>
    );
  }
}

export default SectionArea;
