import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home'
import Health from './Pages/Health/Health'
import Diet from './Pages/Diet/Diet'
import Horscope from './Pages/Horscope/Horscope'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    document.querySelector('.header_menu').classList.toggle('active');
  }
  
  return ( 
    <div className='daf_tools_app'>
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/health' element={<Health />}/>
          <Route path='/blooddiet' element={<Diet />}/> 
          <Route path='/horscope' element={<Horscope />}/>
        </Routes>
      </div>
      <Footer />
    </div>  
  );
}

export default App;
