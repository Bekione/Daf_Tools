import React, {useState, useEffect} from 'react' 
import Output from './Output'
import MobileTitle from '../../Components/MobileTitle'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AOS from "aos";
import Horscope from '../Assets/Horscope.jpg'
import './style.css'
import "aos/dist/aos.css";

const Personality = () => {
  const [dateOfBirth, setDateOfBirth] = useState('')

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

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
    <div className='page_body age' data-aos="fade-down" data-aos-duration="700">
      <div className='page_header age'>
      <MobileTitle currentUrl={'/horscope'} classNm={'horscope'} />
        <img src={Horscope} alt='page header zodiac' className='page_header_image age'/>
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