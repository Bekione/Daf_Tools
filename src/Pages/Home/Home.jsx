import { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import About from './About'
import AOS from "aos"
import "aos/dist/aos.css"
import  './style.css';

const Home = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='home_wrapper page_body' >
      <div className='slider_wrapper'>
        <ImageSlider />
      </div>
      <About />
    </div>
  )
}

export default Home