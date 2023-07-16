import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import Loader from '../../Components/Loader'
import FetchError from '../ErrorPages/FetchError'
import { fetchTextData } from '../../App'
const Description = () => {
  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery('Page_Text_Data', fetchTextData)
  }, [])

  const { data: healthInfos, isLoading, error: fetchError } = useQuery("Page_Text_Data", {
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  if (fetchError) {
    return <FetchError errorMsg={fetchError.message} />
  }

  if (isLoading) {
    return <Loader />
  }
  
  const hydrationLists = healthInfos.hydrationTips.map((tip, index) => {
    return(
      <li className='tip_list' key={index}>
        <p><span className='tip_title'>{tip.tip_title}</span>{tip.tip}</p>
      </li>
    )
  })
  const bmiLists = healthInfos.bmiTips.map((tip, index) => {
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