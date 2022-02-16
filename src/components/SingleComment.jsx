import {Button, ListGroup, Row, Col} from 'react-bootstrap'
import { Component } from 'react'

class SingleComment extends Component {
    

    state = {
        selected: false,
        comments: [],
        id: ''
      }

    

      handleClick = () => { this.setState({ 
        ...this.state,
          selected: !this.state.selected })  }

          componentDidMount = async () => {

           let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ this.props.branding5
            try {
              let response = await fetch(
                httpFetch, {
                 headers: {
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
                }
            }
              )
              if (response.ok) {
                let data = await response.json()
                console.log('THIS IS THE DATA '+data)
                this.setState({
                    
                    ...this.state.selected,
                 comments: data,
                })
              } else {
                alert('something went wrong :(')
                }
              }
             catch (error) {
              console.log(error)
            }
          }

  handleDelete = async (str) => {
        let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ str
        fetch(httpFetch, 
        { method: 'DELETE', 
        headers: {
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
        },
    }
        )
        .then(() => {alert('Delete successful')
            console.log('Delete successful') });
      }

    render(){
        return( 
             <div style={{color: 'black !important'}}>
        <div onClick={this.handleClick}>
        <ListGroup style={{width:'100%', color: 'black !important'}}>
            <Row>
            {this.state.comments.map((comment, idx) =>
            <Col  key={idx + 1} xs={12} md={6} lg={4} xl={3}>
                <ListGroup.Item style={
                    {fontSize:'14px', color: 'black !important'}
                }>{comment.comment}</ListGroup.Item>
  <ListGroup.Item style={{fontSize:'14px', color: 'black !important'}}>{comment.rate}</ListGroup.Item>
  <Button variant="danger" onClick={() => this.handleDelete(comment._id)} >Delete</Button>
              </Col>
 
                )}
  </Row>

</ListGroup>
        </div>
        </div>
        )
}

}

export default SingleComment