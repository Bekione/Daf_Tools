// import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import {Link} from 'react-router-dom'
import HoverableImage from './HoverableImage'
import {findTitle} from '../../Components/Header'
import api from '../../api'

const About = () => {
  // const [aboutData, setAboutData] = useState([])
  const fetchData = async () => {
    const response = await api.get('/api/aboutdata')
    return (response.data)
  }

  const { data: aboutData, isLoading, error } = useQuery("About_Data", fetchData, {
    staleTime: Infinity, // Keep the data stale forever (until manual refetch or window refocus)
    cacheTime: Infinity, // Keep the data in the cache forever
  })


  console.log("About data is : ")
  console.log(aboutData)
  // useEffect(() => {
  //   const fetchData = async () => {
  //       try{
  //           const aboutDataResponse = await api.get('/api/aboutdata')

  //           setAboutData(aboutDataResponse.data)
  //       }
  //       catch(error) {
  //           console.log(error)
  //       }
  //   }
  //   fetchData()
  // }, [])

  if (isLoading) {
    return <div className='daf_loader'><p>Loading...</p></div>;
  }

  if (error) {
    return <div className='error_message'>Error: {error.message}</div>;
  }

  return (
    <div className='tools_about'>
      <h2 className='sub_title'>The Tools</h2>
      <div className='about_rows'>
        {
          aboutData.map((data, index) => {
            return(
              <div className={`about_row ${data.name}`} key={index}>
                <HoverableImage imgPath={data.imgPath}/>
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