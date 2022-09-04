import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'





import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import {NoteList} from './components/NoteList'



function App() {
  return (
   
    

    
  
     
    
    
   

<Router>

<Navigation/>
    
    
    
    <Routes>  
      
      
      <Route path="/" exact element={<NoteList/>}   />
      <Route  path="/edit/:id" element={<CreateNote/>}/>
      <Route path="/create" element={<CreateNote/>}  />
      <Route path="/user" element={<CreateUser/>}  />
     

    </Routes>

    </Router>

   
     
     
    
    

    )

 

  

 
  
}

export default App;
