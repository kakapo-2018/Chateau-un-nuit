import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import ListofRooms from './Index'
import Footer from './Footer'



const App = () => {
  return (
    <Router>
        <React.Fragment>
          <div>
            <div className="Title">
            <Route  path= "/" component={Home}/> 
            </div>
            <div className="SideBar">
            <Route  path= "/index" component={ListofRooms}/>     
            </div> 
            <Footer/>  
         </div>
        </React.Fragment>
     </Router>
      
  )
}

export default App



// class App extends React.Component {
//   constructor(props) {
//     super(props)

//   }


// render() {

//   return ( 
//   <div> 

//     <h1>{Home}</h1>
//     <p> Test </p> 
//   </div>
//       )
//     } 
//   }





