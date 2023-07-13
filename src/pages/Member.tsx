import logo from '../images/logo.png'

export function Member() {
  return (
    <>
      <div className='members'>
        <div className='member'>
          <img src={logo} alt='avatar'/>
          <p><strong>나는재영</strong></p>
          <p>Pwn</p>
        </div>
        <div className='member'>
          <img src={logo} alt='avatar'/>
          <p><strong>BEEP</strong></p>
          <p>Rev</p>
        </div>
        <div className='member'>
          <img src={logo} alt='avatar'/>
          <p><strong>exon</strong></p>
          <p>Web</p>
        </div>
        <div className='member'>
          <img src={logo} alt='avatar'/>
          <p><strong>Wane</strong></p>
          <p>Rev</p>
        </div>
        <div className='member'>
          <img src={logo} alt='avatar'/>
          <p><strong>나는재영</strong></p>
          <p>Crypto</p>
        </div>
      </div>
    </>
  )
}