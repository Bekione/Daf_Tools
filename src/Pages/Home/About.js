import {Link} from 'react-router-dom'
import HoverableImage from './HoverableImage'

const About = () => {
  const aboutPages = [
    {
      name: 'health',
      title: 'Health Tracker',
      imgPath: require('../Assets/mobile_health.png'),
      link: '/health',
      description: 'The web page is a health and fitness tool that allows users to calculate and track their daily water intake and body mass index (BMI). The user inputs their weight and height into the designated fields, and the web page calculates their daily water intake and BMI based on the provided information. The output is displayed on the page in an easy-to-read format, allowing the user to track their progress over time. This tool can be used by individuals looking to improve their health and fitness by monitoring their water intake and BMI.'
    },
    {
      name: 'diet',
      title: 'Diet Guide',
      imgPath: require('../Assets/mobile_diet.png'),
      link: '/blooddiet',
      description: 'The web page is a nutrition tool that allows users to input their blood type and receive a personalized list of foods that are beneficial, harmful, or neutral to their health. The user selects their blood type from a list of options, and the web page generates a list of foods that are recommended, to be avoided, or that have no impact on their health. This information is presented in a clear and easy-to-understand format, allowing the user to make informed decisions about what to eat based on their individual blood type. This tool can be used by individuals looking to optimize their nutrition and improve their overall health and wellbeing.'
    },
    {
      name: 'zodiac',
      title: 'Age Horscope',
      imgPath: require('../Assets/mobile_horscope.png'),
      link: '/personality',
      description: 'The web page is an astrology and personalization tool that allows users to input their date of birth and receive personalized information about their life span and astrological sign. The user enters their birth date, and the web page calculates the number of years, months, days, hours, minutes, and seconds the user has been alive. Additionally, the web page displays the users astrological sign, or zodiac information, based on their birth date. This information is presented in a visually appealing and easy-to-understand format, allowing the user to gain insights and learn more about themselves. This tool can be used by individuals looking to explore their astrological sign and gain a deeper understanding of their life span.'
    }
  ]
  return (
    <div className='tools_about'>
        <h2 className='sub_title'>The Tools</h2>
        <div className='about_rows'>
          {
            aboutPages.map((page, index) => {
              return(
                <div className={`about_row ${page.name}`} key={index}>
                  <HoverableImage imgPath={page.imgPath}/>
                  <div className='about_description'>
                    <p>
                        <span className='description_title'>{page.title}:</span> &nbsp;
                        {page.description}
                    </p>          
                    <Link to={page.link}>
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