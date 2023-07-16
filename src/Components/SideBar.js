import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    case "/horscope": 
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
    name: 'Health Tracker', 
    path: '/health',
    icon: <WaterDropRoundedIcon />
  },
  {
    name: 'Diet Recommendation', 
    path: '/blooddiet',
    icon: <LocalDiningRoundedIcon />
  },
  {
    name: 'Age Horscope', 
    path: '/horscope',
    icon: <Man4RoundedIcon />
  }
]

const SideBar = (props) => {
  const loc = useLocation(); 
  const currentURL = loc.pathname;

  const closeSidebarOnLinkClick = () => {
    if(window.innerWidth <= 500){
      props.toggleSidebar()
      //props.setIsOpen(!props.isOpen)
      // props.setShowOverlay(false)
    }
  }

  const listLinks = links.map((list, index) => {
    let classNameList = 'link'
    if(findActive(currentURL) === index) classNameList = 'link active'
      return (
        <li className='list' key={index}>
          <Link to={list.path} className={classNameList} onClick={() => setTimeout(closeSidebarOnLinkClick, 1)}>
            <span className='icon'>{list.icon}</span>
            <span className='name'>{list.name}</span>
          </Link>
        </li>
      )
  }) 
  return (
    <>
    <div className={props.isOpen?'sidebar active': 'sidebar'}>
        <ul className='lists'> 
          {listLinks}
        </ul>
    </div>
    {props.showOverlay && window.innerWidth <= 500 && (
        <div className="sidebar_overlay" onClick={props.toggleSidebar}></div>
      )}
    </>
  )
}

export default SideBar 
