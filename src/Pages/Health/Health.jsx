import { useEffect } from 'react'
import { useQuery } from 'react-query'
import Form from './Form'
import HealthImage from './HealthImage'
import Description from './Description'
import MobileTitle from '../../Components/MobileTitle'
import { fetchPageImages } from '../../App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

const Health = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()

    document.title = 'Daf Tools | Health'

    return () => {
      document.title = 'Daf Tools'
    }
  }, [])

  const { isLoading: imageLoading, error} = useQuery('Page_Images', fetchPageImages);

  return (
    <div className="health_wrapper page_body" data-aos="fade-down" data-aos-duration="700">
      <MobileTitle currentUrl={'/health'} />
      <div className='health_body_wrapper'>
        <div className='health_body'>
          {!imageLoading && !error ? <Form /> : <></>}
          <HealthImage />
        </div>
      </div>
      <Description />
    </div>
  )
}

export default Health