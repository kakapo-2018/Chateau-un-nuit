import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import ListofRooms from './Index'
import Footer from './Footer'



const App = () => {
  return (
    <Router>
        <React.Fragment>
          <div className='full'>
          <div>
            <h1>Chateau-un-nuit</h1>
          </div>
          <div className='bodywrap'>
            <div className='sidebar'>
            <Route exact path= "/" component={ListofRooms}/>  
            </div> 
            <Route  path= "/room/:id" component={Home}/>
          </div> 
          <div>
            <Footer/>  
         </div> </div>
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





