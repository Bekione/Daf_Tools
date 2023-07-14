import ImageSlider from './ImageSlider'
import About from './About'
import  './style.css';

const Home = () => {

  return (
    <div className='home_wrapper page_body'>
      <div className='slider_wrapper'>
        <ImageSlider />
      </div>
      <About />
    </div>
  )
}

export default Home