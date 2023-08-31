import { BrowserRouter, Route ,Routes} from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

import Navbar from '../src/components/navbar/Navbar'
import { ThemeSelector } from './components/navbar/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/recipes/:id' element = {<Recipe/>}/>
          <Route path='/search' element = {<Search/>}/>
          <Route path='/create' element = {<Create/>}/>

         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
