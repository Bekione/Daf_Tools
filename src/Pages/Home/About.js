import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import HoverableImage from './HoverableImage'
import { findTitle } from '../../Components/Header'
import api from '../../api'
import Loader from '../../Components/Loader'
import FetchError from '../ErrorPages/FetchError'

const About = () => {

  const fetchData = async () => {
    try{
      const aboutResponse = await api.get('/api/aboutdata')
      return aboutResponse.data
    }
    catch(error){
      if(error.name === 'AxiosError'){
        throw new Error(error)
      } else {
        throw new Error('Something went wrong')
      }
    }
  }

  const { data: aboutData, isLoading, error: fetchError } = useQuery("About_Data", fetchData, {
    staleTime: Infinity,
    cacheTime: Infinity, 
  })

  // if (!navigator.onLine) {
  //   return <FetchError errorMsg={"No Internet Connection"} />;
  // }

  if (fetchError) {
    return <FetchError errorMsg={fetchError.message} />
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='tools_about_wrapper'>
      <h2 className='sub_title'>The Tools</h2>
      <div className='about_rows'>
      {
        aboutData.map((data, index) => {
          return(
            <div className='about_row' key={`0${index}`}>
              <div className='hoverable_image_container'>
                <HoverableImage src={data.imgPath} alt={data.name} key={index} />
              </div>
              <div className='about_description'>
                <p>
                  <span className='description_title'>{findTitle(data.link)}:</span> &nbsp;
                  {data.description}
                </p>
                <Link to={data.link}>
                  <button className='submit_btn' >See More</button>
                </Link>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default About