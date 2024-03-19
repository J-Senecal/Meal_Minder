import { useState } from 'react'
import Dashboard from './views/Dashboard';
import Details from './views/RecipeDetails';
import NewRecipe from './views/NewRecipe';
import Update from './views/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {
  
  const [user, setUser] = useState({})
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Dashboard user = {user} setUser = {setUser} /> } />
          <Route path="/recipe" element={ <NewRecipe  /> } />
          <Route path="/recipe/:idMeal/details" element={ <Details user = {user}/> } />
          {/* <Route path="/recipe/:id/update" element={ <Update /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
