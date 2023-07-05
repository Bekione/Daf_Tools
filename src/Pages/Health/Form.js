import React, {useState} from 'react'
import Output from './Output'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const handleForm = () => {
  document.querySelector('.output_wrapper').classList.add('active');
  
}
const Form = () => {
  const [weight, setWeight] = useState(50)
  const [height, setHeight] = useState(100)
  const increaseValue = (type) => {
    if(type === 'weight'){
      if(weight < 400) setWeight(Number(weight) + 1)
    } 
    else if(type === 'height'){
      if(height < 200) setHeight(Number(height) + 1)
    }
  }
  const decreaseValue = (type) => {
    if(type === 'weight'){
      if(weight > 1) setWeight(weight-1)
    } 
    else if(type === 'height'){
      if(height > 1) setHeight(height-1)
    }
  }
 
  const overlayForm = (index) => {
    let overlay = document.querySelectorAll('.overlay')
    overlay[index].classList.toggle('active');
  }
  return (
    <div className='form' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
      <div className='form_header'>
        <p>Please input your weight and height to calculate your recommended daily water intake and also your body mass index</p>
      </div>
      <div className='input_wrapper'>
        <Output setW={setWeight} setH={setHeight} height={height} weight={weight} />
        <div className='input_box'>
          <div className='overlay'>
            <div className="overlay_top">
              <></>
              <HighlightOffOutlinedIcon onClick={() => overlayForm(0)} />
            </div>
            <div className='overlay_body'>
              <p>60% of our body is water. For a person weighing 70kg, that means 42 kg or 42 litres!</p>
            </div>
          </div>
          <div className="box_top">
            <p>Weight</p>
            <InfoOutlinedIcon onClick={() => overlayForm(0)} />
          </div>
          <div className='box_main'>
            <button className='input_control_btn' onClick={() => decreaseValue('weight')}>
              <RemoveCircleOutlineOutlinedIcon />
            </button>
            <div>
              <input type='text' className='input' value={weight} min='20' max='350' id='weight' onChange={(e) => setWeight(e.target.value)}/>
              <span className='unit'>kg</span>
            </div>
            <button className='input_control_btn' onClick={() => increaseValue('weight')}>
              <ControlPointOutlinedIcon />
            </button>
          </div>
        </div>
        <div className='input_box'>
          <div className='overlay'>
            <div className="overlay_top">
              <></>
              <HighlightOffOutlinedIcon onClick={() => overlayForm(1)} />
            </div>
            <div className='overlay_body'>
              <p><strong>Conversion :</strong> 1m == 100cm</p>
              <p>Your blood is composed of 83% of water.</p>
            </div>
          </div>
          <div className="box_top">
            <p>Height</p>
            <InfoOutlinedIcon onClick={() => overlayForm(1)}/>
          </div>
          <div className='box_main'>
            <button className='input_control_btn' onClick={() => decreaseValue('height')}>
              <RemoveCircleOutlineOutlinedIcon title='minus' />
            </button>
            <div>
              <input type='text' className='input' value={height} min='20' max='350' id='height' onChange={(e) => setHeight(e.target.value)}/>
              <span className='unit'>cm</span>
            </div>
            <button className='input_control_btn' onClick={() => increaseValue('height')}>
              <ControlPointOutlinedIcon  title='plus' />
            </button>
          </div>
        </div>
        <div className='form_submit'>
          <button className='submit_btn' onClick={() => handleForm()}>See Results</button>
        </div>
      </div>
    </div>
  )
}

export default Form