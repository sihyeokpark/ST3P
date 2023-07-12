import logo from '../images/logo.png'

export function Nav() {
  return (
    <>
      <nav>
        <div className='title'>
          <img src={logo} className='logo'/>
          <h1>ST3P</h1>
        </div>
        <ul>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/member'>Member</a>
        </ul>
      </nav>
    </>
  )
}