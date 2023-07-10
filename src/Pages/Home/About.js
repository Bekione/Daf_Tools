import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import HoverableImage from './HoverableImage'
import {findTitle} from '../../Components/Header'
import api from '../../api'

const About = () => {
  const [aboutData, setAboutData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try{
            const aboutDataResponse = await api.get('/api/aboutdata')

            setAboutData(aboutDataResponse.data)
        }
        catch(error) {
            console.log(error)
        }
    }
    fetchData()
  }, [])

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