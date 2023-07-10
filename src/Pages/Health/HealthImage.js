import imageFetcher, {getImagePath} from '../Hook/imageFetcher'

const HealthImage = () => {
  const images = imageFetcher('images')
  const blob = getImagePath(images, 'blobanimation')
  const people = getImagePath(images, 'People')
  return (
    <div className='body_image' style={{backgroundImage: `url(${blob})`}} data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
      <img src={people} alt="People drinking water" />
    </div>
  )
}

export default HealthImage