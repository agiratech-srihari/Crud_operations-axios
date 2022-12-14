import './App.css'
import Create from './components/create/Create';
import Read from './components/read/Read'
import { BrowserRouter as Router ,Route, Routes ,} from 'react-router-dom'
import Delete from './components/delete/Delete';
import Update from './components/update/Update';
// import { Button } from 'semantic-ui-react';
import React from 'react';


function App() {
  
  return (
    <Router>

    <div className='main'>
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <Routes>

        <Route path='/' element={<><Create/> <Read/></>} />
        <Route path = '/update' element={<Update/>}/>
        <Route path = '/delete' element={<Delete/>}/>
      
      </Routes>
      <div>
      </div>
    </div>
    </Router>
    )
}

export default App;
