import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export function Nav() {
  return (
    <>
      <nav>
        <Link to='/'>
          <div className='title'>
            <img src={logo} className='logo'/>
            <h1>ST3P</h1>
          </div>
        </Link>
        <ul>
          <Link to='/'><a>Home</a></Link>
          <Link to='/about'><a>About</a></Link>
          <Link to='/member'><a>Member</a></Link>
        </ul>
      </nav>
    </>
  )
}