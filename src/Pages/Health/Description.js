import {useEffect, useState} from 'react'
import api from '../../api'

const Description = () => {
  const [hydrationTips, setHydrationTips] = useState([])
  const [bmiTips, setBmiTips] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        const hydrationResponse = await api.get('/api/hydrationtips')
        const bmiResponse = await api.get('/api/bmitips')

        setHydrationTips(hydrationResponse.data)
        setBmiTips(bmiResponse.data)
      }
      catch(error){
        console.error(error)
      } 
    }

    fetchData()
  }, [])
  
  const hydrationLists = hydrationTips.map((tip, index) => {
    return(
      <li className='tip_list' key={index}>
        <p><span className='tip_title'>{tip.tip_title}</span>{tip.tip}</p>
      </li>
    )
  })
  const bmiLists = bmiTips.map((tip, index) => {
    return(
      <li className='tip_list' key={index}>
        <p><span className='tip_title'>{tip.tip_title}</span>{tip.tip}</p>
      </li>
    )
  })
  
  return (
    <>
      <div className='description' data-aos="fade-up" data-aos-duration="700"> 
        <h2 className='sub_title'>Stay Hydrated</h2>
        <ul>{hydrationLists}</ul>
      </div>
      <div className='description' data-aos="fade-up" data-aos-duration="700"> 
        <h2 className='sub_title'>Stay In Shape</h2>
        <ul>{bmiLists}</ul>
      </div>
    </>
  )
}

export default Description