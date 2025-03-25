// import React from 'react'
// import Demo1 from './Demo1'

// function App() {
//   return (
//     <div >
//       <Demo1></Demo1>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// function App() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App

import React from 'react'
import Mainproject from './Main_project'
import Homee from './Home.js'
import Property from './PropertySubType'
import Project from './Projects'
import Exploree from './Explore'
import Blogr from './Blog'
import Constructionn from './Construction'
import Interiorr from './Interior'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainproject></Mainproject>}/>
          <Route path='/Home' element={<Homee></Homee>}/>
          <Route path='/Property' element={<Property></Property>}/>
          <Route path='/Project' element={<Project />}/>
          <Route path='/Explore' element={<Exploree />}/>
          <Route path='/Blog' element={<Blogr />}/>
          <Route path='/Construction' element={<Constructionn />}/>
          <Route path='/Interior' element={<Interiorr />}/>

        </Routes>
        
      </BrowserRouter>
     
    
    </div>
  )
}

export default App


