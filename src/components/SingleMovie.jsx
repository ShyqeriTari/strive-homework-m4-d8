import './SingleMovie.css'
import {Col} from 'react-bootstrap'


const SingleMovie = (prop) => (
<Col xs={12} sm={4} md = {3} lg={2} className='animated mb-3' onMouseUp={prop.onClick} >
      <img className='img fluid w-100' style={{height:'200px'}}  src={prop.branding.Poster} alt='test'  onMouseDown={(e) => prop.function(prop.branding.imdbID)}/>
    </Col>
)


export default SingleMovie
