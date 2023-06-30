import {Link} from 'react-router-dom'
import Logo from '../Pages/Assets/Logo.png'
import './style.css';
import { useLocation } from 'react-router-dom';

export const findTitle = (value) => {
  let title = ""
  switch(value){
    case "/personality": 
      title = "Personality Predector"
    break;
    case "/health":
      title="Water Intake Calculator"
    break;
    case "/diet":
      title = "Food Recommendation "
    break;
    default:
      title = "DAF Tools"
  }
  return title
}

const Header = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className='header'>
        <div className='header_menu'>
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
    </div>
  )
}

export default Header 
