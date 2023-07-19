import { useState, useEffect } from 'react' 
import { useQuery, useQueryClient } from 'react-query'
import { Helmet } from 'react-helmet'
import Output from './Output'
import MobileTitle from '../../Components/MobileTitle'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { getImagePath } from '../Hook/imageFetcher'
import Loader from '../../Components/Loader'
import FetchError from '../ErrorPages/FetchError'
import { fetchPageImages } from '../../App'
import AOS from "aos"
import "aos/dist/aos.css"
import './style.css'

const Personality = () => {
  const [dateOfBirth, setDateOfBirth] = useState('')

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery('Page_Images', fetchPageImages)
  }, [])

  const {data: headerHorscopeImage, isLoading, error} = useQuery('Page_Images', {
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  if(error){
    return <FetchError errorMsg={error.message}/>
  }

  if(isLoading){
    return <Loader />
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = document.querySelector('.MuiInputBase-input').value
  
    setDateOfBirth(val)
  };

  const style = {
    "& .MuiInputBase-root": {
      backgroundColor: 'rgba(236, 240, 236, .95)'
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: 'var(--clr-secondary)' 
      }
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: 'var(--clr-primary-hovr)'
    },
    "& .MuiFormLabel-root": {
      color: 'var(--clr-primary)'
    },
    "& .MuiSvgIcon-root": {
      fill: 'var(--clr-primary-hovr)'
    }
  }    

  return (
    <div className='page_body age'>
      <Helmet 
      defaultTitle="DAF Tools"
      defaultDescription="Web app project made for intenship program | MERN stack project | Includes - Health tracker, Food recommendation, Horscope/Zodiac finder"
      >
        <meta name="description" content="See your zodiac sign and horscope information based on your date of birth." />
        <title>Daf Tools | Horscope finder</title>
      </Helmet>
      <div className='page_header age' data-aos="fade-down" data-aos-duration="700">
      <MobileTitle currentUrl={'/horscope'} classNm={'horscope'} />
        <img src={getImagePath(headerHorscopeImage.imageResponse, 'Horscope')} alt='page header zodiac' className='page_header_image age'/>
        <div className='date_input_wrapper'>
          <div className='date_title'>
            <p>Please enter your date of birth</p>
          </div>
          <form className='date_form' onSubmit={handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']}>
                <DatePicker 
                  label="Date of brith"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  // onChange={(e) => setDateOfBirth(e.target.value)}
                  sx={[style, {width: '100%'}]}
                />
              </DemoContainer>
            </LocalizationProvider>
            <div className='form_submit'>
              <button type='submit' className='submit_btn'>See Results</button>
            </div>
          </form>
        </div>
      </div>

      <div className='age_body'>
        <Output dateOfBirth={dateOfBirth} />
      </div>
      
    </div>
  );
}

export default Personality