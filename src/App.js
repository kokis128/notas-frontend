import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'





import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import {NoteList} from './components/NoteList'




function App() {
  return (
   
    

    
  
     
    
    
   

<Router>

<Navigation/>
    
    
    
     <div className='container p-4'>
    <Routes>  
      

       
     <Route path="/" element={<Navbar.Brand />}   />
     
        <Route path="/" element={<NoteList/>}   />
        <Route  path="/edit/:id" element={<CreateNote/>}/>
        <Route path="/create" element={<CreateNote/>}  />
        <Route path="/user" element={<CreateUser/>}  />
        <Route path="*" element={<Navigate replace to = "/"/>}  />        

      <Route/>

     

    </Routes>
      </div>

    </Router>

   
     
     
    
    

    )

 

  

 
  
}

export default App;
