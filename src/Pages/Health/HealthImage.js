import Blob from '../Assets/blobanimation.svg'
import People from '../Assets/People.png'

const HealthImage = () => {
  return (
    <div className='body_image' style={{backgroundImage: `url(${Blob})`}} data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
      <img src={People} alt="People drinking water" />
    </div>
  )
}

export default HealthImage