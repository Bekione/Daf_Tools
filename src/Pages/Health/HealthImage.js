import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import {getImagePath} from '../Hook/imageFetcher'
import api from '../../api'
import { fetchPageImages } from '../../App'
import Loader from '../../Components/Loader'
import FetchError from '../ErrorPages/FetchError'

export const fetchData = async () => {
  const imageResponse = await api.get('/api/asset/images')

  return imageResponse.data
}

const HealthImage = () => {

  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery('Page_Images', fetchPageImages)
  }, [])

  const {data : healthImages, isLoading, error: fetchError} = useQuery('Page_Images', {
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  if (fetchError) {
    return <FetchError errorMsg={fetchError.message} />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='body_image' style={{backgroundImage: `url(${getImagePath(healthImages.imageResponse, 'blobanimation')})`}} data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
      <img src={getImagePath(healthImages.imageResponse, 'People')} alt="People drinking water" />
    </div>
  )
}

export default HealthImage