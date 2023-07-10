import {Link} from 'react-router-dom'
import imageFetcher, {getImagePath} from '../Hook/imageFetcher'

let msg = ""

const calcWaterIntake = (weight) => {
  let liter = (weight * 0.033).toFixed(2)

  return liter
}

const calcBMI = (height, weight) => {
  height = parseFloat(height/100)
  let bmi = (weight / Math.pow(height, 2)).toFixed(2)

  if(bmi < 18.5){
    msg = 'Your BMI is low(underweight). You may want to consult a doctor or dietician to ensure you are getting all the necessary nutrients.'
  }
  else if(bmi >= 18.5 && bmi <= 24.9){
    msg = 'Your BMI falls within the healthy range(normal). Keep up the good work!'
  } else if(bmi >= 25.0 && bmi <= 29.9) {
    msg = 'Your bmi is high(overweight), you may want to consider making some changes to your diet and exercise habits to improve your health.'
  }
  else if(bmi >= 30.0) {
    msg = 'Your BMI is very high(obese),  you may want to consider making some changes to your diet and exercise habits to improve your health.'
  } 
  else {
    msg = 'Make sure you give the correct input'
  }

  return bmi
}
const setMessage = () => {
  return msg
}

const Output = ({setW, setH, height, weight}) => {
  const images = imageFetcher('images')
  const jar = getImagePath(images, 'WaterJar')
  const bmi = getImagePath(images, 'BMI')
  const status = getImagePath(images, 'Status')

  const back = () => { 
    //Code to make the input state to it's initial values
    setW(50)
    setH(100)
    document.querySelector('.output_wrapper').classList.remove('active');
  }


  return (
    <div className='output_wrapper'>
      <div className='output_header'>
        <h2 className='sub_title'>Your Result</h2>
      </div>
      <div className='output_body'>
        <div className='output_row'>
          <div className="output_icon">
            <img src={jar} alt='Water jar' />
          </div>
          <div className='output_text'>Your recommended daily water intake is {calcWaterIntake(weight)} Liters or {(calcWaterIntake(weight) * 4).toFixed(0)} glass of water.</div>
        </div>
        <div className='output_row'>
          <div className="output_icon">
            <img src={bmi} alt='Water jar' />
          </div>
          <div className='output_text'>Your Body Mass Index is {calcBMI(height, weight)}.</div>
        </div>
        <div className='output_row'>
          <div className="output_icon">
            <img src={status} alt='Water jar' />
          </div>
          <div className='output_text'>{setMessage()}<Link to='https://www.doctor.com' target='_blank' rel='noopener' className='result_link'>Get help</Link></div>
        </div>
      </div>
      <div className='form_submit'>
        <button className='submit_btn' onClick={() => back()}>Back</button>
      </div>
    </div>
  )
}

export default Output