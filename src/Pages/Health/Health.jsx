import {useEffect} from 'react'
import Form from './Form'
import HealthImage from './HealthImage'
import Description from './Description'
import MobileTitle from '../../Components/MobileTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

const Health = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className="health_wrapper page_body" data-aos="fade-down" data-aos-duration="700">
      <MobileTitle currentUrl={'/health'} />
      <div className='health_body_wrapper'>
        <div className='health_body'>
          <Form />
          <HealthImage />
        </div>
      </div>
      <Description />
    </div>
  )
}

export default Health