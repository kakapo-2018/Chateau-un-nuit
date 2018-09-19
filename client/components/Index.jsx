import React from 'react'
import {Link} from 'react-router-dom'
import {getAllRooms} from '../api/api'

class ListofRooms extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      roomList:[]
    }
    this.setUpRooms = this.setUpRooms.bind(this)
  }
  
  componentDidMount(){
    this.setUpRooms()
  }

  setUpRooms(){
    getAllRooms()
    .then(res =>{
      console.log('rooms', res)
      
      this.setState({
        roomList: res
      })
    })
  }

render(){
  return(
   <React.Fragment>
      {this.state.roomList.map(room => {
        return <li key={room.room_name}><Link to={`/room/${room.id}`} >{room.room_name}</Link></li>
        
      })}

      <img src='http://sweethotelmasiadelacy.com/wp-content/uploads/2017/05/11.jpg'/>
      
    </React.Fragment>
  )
}

  
}
export default ListofRooms