import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <meta name="description" content="Track your health, daily water intake amount and body mass index based on your weight and height." />
      </Helmet>
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