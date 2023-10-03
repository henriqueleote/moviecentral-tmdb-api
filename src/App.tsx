import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import HomeView from './views/HomeView'
import MovieDetailView from './views/MovieDetailView'


function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<HomeView/>}/>
        <Route path='/movie/:id' element={<MovieDetailView/>}/>
      </Routes >
    </Router>
  )
}

export default App
