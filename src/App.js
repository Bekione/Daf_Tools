import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Health from './Pages/Health/Health'
import Diet from './Pages/Diet/Diet'
import Personality from './Pages/Personality/Personality'
import './App.css'

const App = () => {
  return ( 
    <div className='daf_tools_app'>
      <Header />
      <SideBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/health' element={<Health />}/>
          <Route path='/blooddiet' element={<Diet />}/> 
          <Route path='/personality' element={<Personality />}/>
        </Routes>
      </div>
      <Footer />
    </div>  
  );
}

export default App;
