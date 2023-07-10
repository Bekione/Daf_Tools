import {useState, useEffect} from 'react'
import ImageSlider from './ImageSlider'
import About from './About'
import AOS from 'aos'
import 'aos/dist/aos.css'
import  './style.css';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true)
 
  useEffect(() => {
    AOS.init()
    AOS.refresh()
    
    const checkScreen = () => {
      if(window.innerWidth < 700){
        setIsDesktop(false)
      } else setIsDesktop(true)
    }

    window.addEventListener('load', () => checkScreen());
    window.addEventListener('resize', () => checkScreen());

    return () => {
      window.removeEventListener('load', () => checkScreen())
      window.removeEventListener('resize', () => checkScreen())
    }
  }, [])

  return (
    <div className='home_wrapper page_body'>
      <div className='slider_wrapper'>
        <ImageSlider isDesktop={isDesktop} />
      </div>
      <About />
    </div>
  )
}

export default Home