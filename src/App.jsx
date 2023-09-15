import { Link } from 'react-router-dom'
import './App.css'
import CoustomRoutes from './routes/Cusstomroutes'

function App() {
 

  return (
    <div className='outer-pokedex'>  
     <h1  id="pokedex-heading">  
     <Link to="/">Pokedex</Link>
     </h1>
   <CoustomRoutes/> 
    </div>
  )
}

export default App
