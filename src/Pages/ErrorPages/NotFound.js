import {Link} from 'react-router-dom'
import bg from '../Assets/404.jpg'
import './style.css'

const NotFound = () => {

  return (
    <div className='page_body error'>
        <div className="notfound" style={{backgroundImage: `url(${bg})`}}>
            <div className="notfound-404">
                <h1>404</h1>
                <p>we are sorry, but the page you requested was not found</p>
            </div>
            <div className='buttons'>
                <Link to="/" className="home-btn">Go Home</Link>
                <Link to="https://www.github.com/bekione/daftools.git" target="_blank" className="sourcecode-btn">Get source code</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound