import { NavLink, Link } from 'react-router-dom'
import '../slidebar/slidebar.css'

const Slidebar = () => {
  return (
    <nav className='slidebar'>
      <div className='slidebar__item'>
        <NavLink to='/profile' className='slidebar__link'>Profile</NavLink>
      </div>
      <div className='slidebar__item'>
        <NavLink to='/dialogs' className='slidebar__link'>Message</NavLink>
      </div>
      <div className='slidebar__item'>
        <NavLink to='/news' className='slidebar__link'>News</NavLink>
      </div>
      <div className='slidebar__item'>
        <NavLink to='/music' className='slidebar__link'>Music</NavLink>
      </div>
      <div className='slidebar__item'>
        <NavLink to='/settings' className='slidebar__link'>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Slidebar;