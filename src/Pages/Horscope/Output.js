import {useEffect, useState} from 'react'
import findZodiac, {calculateAge, dateFormatter, isBrithDay, changeBg} from './methods'
import imageFetcher from '../Hook/imageFetcher'
import api from '../../api'

const Output = ({dateOfBirth}) => {
    const [zodiacSignsInfo, setZodiacSignsInfo] = useState([]) 
    const [zodiacUiData, setZodiacUiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const zodiacInfoResponse = await api.get('/api/zodiacsignsinfo')
                const zodiacUiResponse = await api.get('/api/zodiacuidata')

                setZodiacSignsInfo(zodiacInfoResponse.data)
                setZodiacUiData(zodiacUiResponse.data)
            }
            catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const signImages = imageFetcher('zodiacimages')
    
    let hbdMessage;
    let zodiacLists;
    const ageBody = document.querySelector('.page_body.age')
    let dateResults = calculateAge(dateOfBirth)
    const zodiacData = findZodiac(dateOfBirth, zodiacSignsInfo)
    const dateProgressRatios = [76, 12, 4, 7, 24, 60, 60]
    const dateResultLabels = ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"]
    
    if(zodiacData){
        if(isBrithDay(dateOfBirth)){
            hbdMessage = "🎉Happy Birth day, Wish you all the best!"
            let clrArr = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab', '#1bee1b', '#f3f316']
            changeBg(ageBody, clrArr)
        } 
        else {
            let color;
            color = zodiacUiData[zodiacData.id -1].color;
            changeBg(ageBody, color)
        }
        zodiacLists = Object.entries(zodiacData).map((entry, index) => {
            if(new RegExp('[1-7]').test(index)){
                return(
                    <li key={index}>
                        <strong className='key'>
                        {(entry[0] === 'startDate') ? 'Start date' : (entry[0] ===  'endDate') ? 'End date': (entry[0] === 'planet') ? 'Rulling planet' : entry[0]}
                         :
                        </strong>
                        {
                        (Array.isArray(entry[1])) ? entry[1].join(', ') 
                        :(['startDate', 'endDate'].includes(entry[0])) ? String(dateFormatter(entry[1]))
                        : entry[1]
                        }
                    </li>
                )
            }
            return null
        })
    }

    return (
        <div className='page_output'>
            <div className="age_result_wrapper">
            {zodiacData && (
                <>
                    <div className='message_row'>
                        <h1 className='hbd_message'>{hbdMessage}</h1>
                    </div>
                    <div className='title_row' data-aos="fade-up" data-aos-duration="500">
                        <h2 className='title'>You have lived :</h2>
                    </div>
                    <div className="age_result">
                    {
                        Object.keys(dateResults).map((result, index) => {
                            return(
                                <div className="result_item" key={index} data-aos="zoom-in" data-aos-duration="500" data-aos-delay={(100 + (index*150))}>
                                    <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults[result]) / dateProgressRatios[index]}%`, '--color': `${zodiacUiData[zodiacData.id -1].dark_color}` }}>
                                        <h1>{dateResults[result]}</h1>
                                        <p>{([0, 1].includes(dateResults[result]))? dateResultLabels[index] : `${dateResultLabels[index]}s`}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </>
            )}
            </div>
            <div className='zodiac_result_wrapper'>
            {zodiacData && (
                <>
                    <div className='title_row' data-aos="fade-up" data-aos-duration="500" >
                        <h2 className='title'>You are {zodiacData.name}&nbsp;{zodiacUiData[zodiacData.id - 1].emoji}</h2>
                    </div>
                    <div className='zodiac_result row1'>
                        <div className='result_image' data-aos="fade-right" data-aos-duration="500"data-aos-delay="200">
                            <img src={signImages[(zodiacData.id - 1)].path} alt="your zodiac sign" />
                        </div>
                        <div className='result_info' data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                            <div className='behaviors'>
                                <table className='behaviors_table'>
                                    <caption style={{ '--clr-bg': `${zodiacUiData[zodiacData.id -1].dark_color}`}}>Your common behaviors</caption>
                                    <thead style={{ '--clr-bg': `${zodiacUiData[zodiacData.id -1].dark_color}`}}>
                                        <tr>
                                            <th>
                                                <h3>+ve</h3>
                                            </th>
                                            <th>
                                                <h3>-ve</h3>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        zodiacData.traits.good.map((data, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td data-label="+ve">{data}</td>
                                                    <td data-label="-ve">{zodiacData.traits.bad[index]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='zodiac_result row2'>
                        <div className='result_header' data-aos="fade-left" data-aos-duration="500">
                            <span></span>
                        </div>
                        <div className='result_bottom'>
                            <div className='result_list_wrapper' data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                                <ul className='result_list'>{zodiacLists}</ul>
                            </div>
                            <div className='zodiac_description' data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
                                <div className="title_row">
                                    <h2 className='description_title'>About {zodiacData.name}</h2>
                                </div>
                                <p className='description_paragraph'>{zodiacData.description}</p>
                            </div>
                        </div>
                    </div>
                </>  
            )}
            </div>
        </div>
    )
}

export default Output