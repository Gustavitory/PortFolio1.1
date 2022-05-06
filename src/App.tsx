
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './Components/Nav';
import { Home } from './Pages/Home/Home';
import { Landing } from './Pages/Landing/Landing';
import { Tech } from './Pages/Tech/Tech';

function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<Nav/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/contact' element={<Nav/>}/>
        <Route path='/proj' element={<Nav/>}/>
      </Routes>
    </div>
  );
}

export default App;
