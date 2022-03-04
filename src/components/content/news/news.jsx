import './../news/news.css'

const News = () => {
  return (
    <div className='news'>
      <div className='news__post'>
        <a href='#' className='news__avatar'>
          <div className='news__avatar'></div>
        </a>
        <p className='news__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ducimus!</p>
      </div>
      <div className='news__post'>
        <a href='#' className='news__avatar'>
          <div className='news__avatar'></div>
        </a>
        <p className='news__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus inventore numquam quisquam deleniti sequi ullam reprehenderit architecto id! Perferendis, dolor.</p>
      </div>
    </div>
  );
}

export default News;