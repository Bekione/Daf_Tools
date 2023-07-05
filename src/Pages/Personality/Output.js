import zodiacSigns from './zodiacSigns'
import findZodiac, {calculateAge, dateFormatter, isBrithDay, changeBg} from './methods'

const Output = ({dateOfBirth}) => {
    const signs = ["♈︎", "♉︎", "♊︎", "♋︎", "♌︎", "♍︎", "♎︎", "♏︎", "♐︎", "♑︎", "♒︎", "♓︎"]
    const zodiacColors = ['#fc7d4b', '#5bbd93', '#f8cd57', '#c0c0c0', '#f3d217', '#a13030', '#fac3cc', '#212121', '#a176bd', 'brown', '#8dcafc', '#90ee90' ]
    const zodiacColorsDark = ['#fb5532', '#1ca56f', '#fca62f', '#afaeae', '#dfc118', '#912e2e', '#da9ca6', '#1d1d1d', '#804ea0', 'red', '#64b9fc', '#73d673']
    const signImages = [
        require('../Assets/aries.png'),
        require('../Assets/taurus.png'),
        require('../Assets/gemini.png'),
        require('../Assets/cancer.png'),
        require('../Assets/leo.png'),
        require('../Assets/virgo.png'),
        require('../Assets/libra.png'),
        require('../Assets/scorpio.png'),
        require('../Assets/sagittarius.png'),
        require('../Assets/capricorn.png'),
        require('../Assets/aquarius.png'),
        require('../Assets/pisces.png'),
    ]
    
    var hbdMessage;
    var zodiacLists;
    const ageBody = document.querySelector('.page_body.age')
    var dateResults = calculateAge(dateOfBirth)
    const zodiacData = findZodiac(dateOfBirth, zodiacSigns);
    

    if(dateResults){
        setInterval(() => {
            dateResults = calculateAge(dateOfBirth)
        }, 1000)
    }


    if(zodiacData){
        if(isBrithDay(dateOfBirth)){
            hbdMessage = "🎉Happy Birth day, Wish you all the best!"
            let clrArr = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab', '#1bee1b', '#f3f316']
            changeBg(ageBody, clrArr)
        } 
        else {
            let color;
            color = zodiacColors[zodiacData.id -1];
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
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.years) / 76}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.years}</h1>
                                <p>{([0, 1].includes(dateResults.years))? 'Year' : 'Years'}</p>
                            </div>
                        </div>
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="250">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.months) / 12}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.months}</h1>
                                <p>{([0, 1].includes(dateResults.months))? 'Month' : 'Months'}</p>
                            </div>
                        </div>
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.weeks) / 4}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.weeks}</h1>
                                <p>{([0, 1].includes(dateResults.weeks))? 'Week' : 'Weeks'}</p>
                            </div>
                        </div>
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="550">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.days) / 7}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.days}</h1>
                                <p>{([0, 1].includes(dateResults.days))? 'Day' : 'Days'}</p>
                            </div>
                        </div>
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.hours) / 24}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.hours}</h1>
                                <p>{([0, 1].includes(dateResults.hours))? 'Hour' : 'Hours'}</p>
                            </div>
                        </div>
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="850">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.minutes) / 60}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.minutes}</h1>
                                <p>{([0, 1].includes(dateResults.minutes))? 'Minute' : 'Minutes'}</p>
                            </div>
                        </div>
                        <div className="result_item" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">
                            <div className="result_item_progress" style={{ '--progress': `${(100 * dateResults.seconds) / 60}%`, '--color': `${zodiacColorsDark[zodiacData.id -1]}` }}>
                                <h1>{dateResults.seconds}</h1>
                                <p>{([0, 1].includes(dateResults.seconds))? 'Second' : 'Seconds'}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
        <div className='zodiac_result_wrapper'>
            {zodiacData && (
                <>
                    <div className='title_row' data-aos="fade-up" data-aos-duration="500" >
                        <h2 className='title'>You are {zodiacData.name}&nbsp;{signs[zodiacData.id - 1]}</h2>
                    </div>
                    <div className='zodiac_result row1'>
                        <div className='result_image' data-aos="fade-right" data-aos-duration="500"data-aos-delay="200">
                            <img src={signImages[(zodiacData.id - 1)]} alt="your zodiac sign" />
                        </div>   
                        <div className='result_info' data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                            <div className='behaviors'>
                                <table className='behaviors_table'>
                                    <caption style={{ '--clr-bg': `${zodiacColorsDark[zodiacData.id -1]}`}}>Your common behaviors</caption>
                                    <thead style={{ '--clr-bg': `${zodiacColorsDark[zodiacData.id -1]}`}}>
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