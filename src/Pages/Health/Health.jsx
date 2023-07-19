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
  }, [])

  const { isLoading: imageLoading, error} = useQuery('Page_Images', fetchPageImages);

  return (
    <div className="health_wrapper page_body" data-aos="fade-down" data-aos-duration="700">
      <Helmet 
      defaultTitle="DAF Tools"
      defaultDescription="Web app project made for intenship program | MERN stack project | Includes - Health tracker, Food recommendation, Horscope/Zodiac finder"
      >
        <meta name="description" content="Track your health, daily water intake amount and body mass index based on your weight and height." />
        <title>Daf Tools | Health Tracker</title>
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