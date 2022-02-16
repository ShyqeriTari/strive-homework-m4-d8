 import { useState } from "react"
 import SectionArea from "./SectionArea";

const TvShows = () => {

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


    return(
    <>
      <center><input type="text" className='mt-4 mb-4' style={{width:'50%', margin:'auto', textAlign: 'center'}} placeholder='search your favorite movies' onKeyUp={(event)=> handleSearch(event.target.value)} /></center>
      {title.length > 2 &&  <SectionArea function={changeDisplayId} branding={title}/>}
    </>
    )
}

export default TvShows

// onChange={(event)=> handleSearch(event.target.value)}