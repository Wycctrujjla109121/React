import './SendPosts.css'
import Post from '../post/posts.jsx'

const SendPost = (props) => {
  return (
    <div className='send_post'>
      <h2 className='send_post__label'>My post</h2>
      <textarea className='send_post__textarea' placeholder='your news...'></textarea>
      <button className='send_post__button'>Отправить</button>

      <div className='new__post'>
        {props.postData.map(element =>
          <Post key={element.message} id={element.id} img={element.img} message={element.message} />
        )}
      </div>
    </div>
  );
}

export default SendPost