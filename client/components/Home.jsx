import React from 'react'
import {Link} from 'react-router-dom'
import {getRoom} from '../api/api'

class Home extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      room:{}
    }
    this.setUpRoom = this.setUpRoom.bind(this)
  }
  
  componentDidMount(){
    this.setUpRoom()
  }

  setUpRoom(){
    getRoom(this.props.match.params.id)
    .then(res =>{
      this.setState({
        room: res
      })
    })
  }

render(){
  return(
   <React.Fragment>
   {console.log(this.state.room)}
      <h2>{this.state.room.room_name}</h2>
      <p>{this.state.room.description}</p>
      <h5>Capacity: {this.state.room.capacity}</h5>
      <button onClick={()=> alert('Well done, good booking, proud of you')}>BOOK</button>
      <button><Link to='/'>Back to home</Link></button>
      <p></p>
      <img src={this.state.room.img} />
    </React.Fragment>
  )
}

  
}
export default Home