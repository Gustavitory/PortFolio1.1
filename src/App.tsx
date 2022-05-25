
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ContactForm } from './Components/ContactForm';
import { About } from './Pages/About/About';
import { Home } from './Pages/Home/Home';
import { Landing } from './Pages/Landing/Landing';
import { Projects } from './Pages/Projects/Projects';
import { Tech } from './Pages/Tech/Tech';

function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/proj' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
