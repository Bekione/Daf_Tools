import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Health from './Pages/Health/Health';
import Diet from './Pages/Diet/Diet';
import Horscope from './Pages/Horscope/Horscope';
import NotFound from './Pages/ErrorPages/NotFound';
import './App.css';
import api from './api';

export const fetchPageImages = async () => {
  try{
    const imageResponse = await api.get('/api/asset/images')
    const carouselImageResponse = await api.get('/api/asset/carouselimages')
    return {imageResponse: imageResponse.data, carouselImageResponse: carouselImageResponse.data}
  }
  catch(error){
    if(error.name === 'AxiosError'){
      throw new Error(error)
    } else {
      throw new Error('Something went wrong')
    }
  }
}

export const fetchTextData = async () => {
  try{
    const hydrationResponse = await api.get('/api/hydrationtips')
    const bmiResponse = await api.get('/api/bmitips')

    return { hydrationTips: hydrationResponse.data, bmiTips: bmiResponse.data }
  }
  catch(error){
    if(error.name === 'AxiosError'){
      throw new Error(error)
    } else {
      throw new Error('Something went wrong')
    }
  }
}

const queryClient = new QueryClient() //By making quryclient outside the App component App rerendering doesn't clear cached data

const App = () => {

  useEffect(() => {
    queryClient.prefetchQuery('Page_Images', fetchPageImages);
    queryClient.prefetchQuery('Page_Text_Data', fetchTextData)
    
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false)
  
  const toggleSidebar = () => {
    if(!isOpen){
      setIsOpen(true)
      setTimeout(() => {
        setShowOverlay(true);
      }, 100)
      document.querySelector('.header_menu').classList.add('active')
    } else {
      setIsOpen(false)
      setShowOverlay(false)
      document.querySelector('.header_menu').classList.remove('active')
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="daf_tools_app">
        <Header toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar} showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/blooddiet" element={<Diet />} />
            <Route path="/horscope" element={<Horscope />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;