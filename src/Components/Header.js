import { useLocation, Link } from 'react-router-dom'
import Logo from '../Pages/Assets/Logo.png'
import GitHub from '@mui/icons-material/GitHub'
import './style.css';

export const findTitle = (value) => {
  let title = ""
  switch(value){
    case "/health":
      title="Health Tracker"
    break;
    case "/blooddiet":
      title = "Food Guide "
    break;
    case "/personality": 
      title = "Age Horscope"
    break;
    default:
      title = "DAF Tools"
  }
  return title
}

const Header = ({toggleSidebar}) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className='header'>
        <div className='header_menu' onClick={toggleSidebar}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <div className='header_logo'>
          <Link to='/'>
            <img src={Logo} alt="DAF Tools" className='logo_img'/>
          </Link>
        </div>
        <div className='header_title '>
            <h2 className='title'>{findTitle(currentUrl)}</h2>
        </div>
        <Link to='https://github.com/Bekione/Daf_Tools/' target='_blank'>
          <div className='header_link github_sourcecode'>
            <GitHub />
          </div>
        </Link>
    </div>
  )
}

export default Header 
