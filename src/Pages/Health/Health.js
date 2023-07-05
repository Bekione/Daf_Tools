import Form from './Form'
import HealthImage from './HealthImage'
import Description from './Description'
import './style.css'

const Health = () => {
  return (
    <div className="health_wrapper page_body">
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