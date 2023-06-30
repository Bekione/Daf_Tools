import {Link, useLocation} from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import Man4RoundedIcon from '@mui/icons-material/Man4Rounded';

const findActive = (value) => {
  let active = 0
  switch(value){
    case "/health":
      active = 1
    break;
    case "/blooddiet":
      active = 2
    break;
    case "/personality": 
      active = 3
    break;
    default:
      active = 0
  }
  return active
}

const links = [
  {
    name: 'Home', 
    path: '/',
    icon: <HomeRoundedIcon />
  },
  {    
    name: 'Water Intake Calculator', 
    path: '/health',
    icon: <WaterDropRoundedIcon />
  },
  {
    name: 'Food Recommendation', 
    path: '/blooddiet',
    icon: <LocalDiningRoundedIcon />
  },
  {
    name: 'Personality Predector', 
    path: '/personality',
    icon: <Man4RoundedIcon />
  }
]

const SideBar = () => {
  const loc = useLocation(); 
  const currentURL = loc.pathname;
  
  const listLinks = links.map((list, index) => {
    let classNameList = 'link'
    if(findActive(currentURL) === index) classNameList = 'link active'
      return (
        <li className='list' key={index}>
          <Link to={list.path} className={classNameList}>
            <span className='icon'>{list.icon}</span>
            <span className='name'>{list.name}</span>
          </Link>
        </li>
      )
  }) 
  return (
    <div className='sidebar'>
        <ul className='lists'> 
          {listLinks}
        </ul>
    </div>
  )
}

export default SideBar 
