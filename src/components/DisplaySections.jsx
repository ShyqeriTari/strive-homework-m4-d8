import { useState } from "react";
import SectionArea from "./SectionArea";
// import CommentArea from "./CommentArea";

 const DisplaySections = () => {

    // state = {
    //     title : '',
    //     id : undefined,
    // }

    const [title, setTitle] = useState('')
    const [id, setId] = useState(undefined)

  const  handleSearch = async (str) => {

        setTitle('') 
        setTitle(str) 
        // this.setState({...this.state, this.state.title.length})
    }

  const  changeDisplayId = (string) => {
        setId(string) 
    }


    return(<>
    <center><input type="text" className='mt-4 mb-4' style={{width:'50%', margin:'auto', textAlign: 'center'}} placeholder='search your favorite movies' onKeyUp={(event)=> handleSearch(event.target.value)}/></center>
    {/* <CommentArea branding2={id}/> */}
  {title.length > 2 &&  <SectionArea function={changeDisplayId} branding={title}/>}

  {title.length < 3 &&    <SectionArea function={changeDisplayId} branding='Harry Potter'/>} 
  
      
  {title.length < 3 &&    <SectionArea function={changeDisplayId} branding='Soccer'/>}
     {title.length < 3 &&    <SectionArea function={changeDisplayId} branding='Friends'/>}
     {title.length < 3 &&    <SectionArea function={changeDisplayId} branding='lord Of Rings'/>}
        </>)
   
}



export default DisplaySections