import '../slidebar/slidebar.css'

const Slidebar = () =>{
    return(
        <nav className='slidebar'>
        <div className='slidebar__item'>
          <a href='#' className='slidebar__link'>Profile</a>
        </div>
        <div className='slidebar__item'>
          <a href='#' className='slidebar__link'>Message</a>
        </div>
        <div className='slidebar__item'>
          <a href='#' className='slidebar__link'>News</a>
        </div>
        <div className='slidebar__item'>
          <a href='#' className='slidebar__link'>Music</a>
        </div>
        <div className='slidebar__item'>
          <a href='#' className='slidebar__link'>Settings</a>
        </div>
      </nav>
    );
}

export default Slidebar;