import { Component } from "react";
import SectionArea from "./SectionArea";
import CommentArea from "./CommentArea";

class DisplaySections extends Component {

    state = {
        title : '',
        id : undefined,
    }


    handleSearch = async (str) => {

        this.setState({ ...this.state, title:''})
        this.setState({...this.state, title: str})
        // this.setState({...this.state, this.state.title.length})
    }

    changeDisplayId = (string) => {
        this.setState({...this.state, id: string})
    }


render(){
    return(<>
    <center><input type="text" className='mt-4 mb-4' style={{width:'50%', margin:'auto', textAlign: 'center'}} placeholder='search your favorite movies' onChange={(event)=> this.handleSearch(event.target.value)}/></center>
    <CommentArea branding2={this.state.id}/>
  {(this.state.title.length > 3 && this.state.title.length < 50) && <SectionArea function={this.changeDisplayId} branding={this.state.title}/>}

  {this.state.title.length < 4 &&    <SectionArea function={this.changeDisplayId} branding='Harry Potter'/>} 
  
      
  {this.state.title.length < 4 &&    <SectionArea function={this.changeDisplayId} branding='Soccer'/>}
     {this.state.title.length < 4 &&    <SectionArea function={this.changeDisplayId} branding='Friends'/>}
     {this.state.title.length < 4 &&    <SectionArea function={this.changeDisplayId} branding='lord Of Rings'/>}
        </>)
    }
}



export default DisplaySections