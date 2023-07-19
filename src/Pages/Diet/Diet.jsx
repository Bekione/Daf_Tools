import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Helmet } from 'react-helmet'
import {getImagePath} from '../Hook/imageFetcher'
import Info from './Info'
import Table from './Table'
import MobileTitle from '../../Components/MobileTitle'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Loader from '../../Components/Loader'
import FetchError from '../ErrorPages/FetchError'
import { fetchPageImages } from '../../App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

const Diet = () => {
  const [blood, setBlood] = useState('')
  
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery('Page_Images', fetchPageImages)
  }, [])

  const {data: headerFoodImage, isLoading, error} = useQuery('Page_Images', {
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  if(error){
    return <FetchError errorMsg={error.message} />
  }

  if(isLoading) {
    return <Loader />
  }
  const handleChange = (val) => {
    setBlood(val)  
  }
  
  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: 'var(--clr-secondary)'  
      }
    },
    "& #demo-simple-select-label": {
      color: 'var(--clr-primary)'
    },
    "& #demo-simple-select": {
      backgroundColor: 'rgba(236, 240, 236, .95)'
    }
  }   

  return (
    <div className='page_body food_wrapper' data-aos="fade-down" data-aos-duration="700">
      <Helmet 
      defaultTitle="DAF Tools"
      defaultDescription="Web app project made for intenship program | MERN stack project | Includes - Health tracker, Food recommendation, Horscope/Zodiac finder"
      >
        <meta name="description" content="Get recommended a list of good, normal and bad foods based on you blood type" />
        <title>Daf Tools | Diet Guide</title>
      </Helmet>
      <div className='food_header page_header'>
      <MobileTitle currentUrl={'/blooddiet'} classNm={'diet'} />
        <img src={getImagePath(headerFoodImage.imageResponse, 'BloodFood')} alt='Food and blood type' className='page_header_image food' />
        <div className='select_wrapper'>
          <div className='select_title'>
            <p>Please select your blood type</p>
          </div>
          <Box sx={[style, {minWidth: 'fit-content'}]}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" >Blood Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={blood}
                label="Blood Group"
                onChange={(e) => handleChange(e.target.value)} 
                MenuProps={{
                  disableScrollLock: true,
                }}
              >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'O'}>O</MenuItem>
                <MenuItem value={'AB'}>AB</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className='food_body' >
        <Info />
        <div className='recommendation_result' data-aos="fade-up" data-aos-duration="900">
          <div className='table_wrapper'>
            {
              (blood !== '') ? 
              <p className='result_label'>Food results for blood type <code>{blood}</code></p>
              :
              <></>
            }
            <Table bloodType={blood} />
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default Diet