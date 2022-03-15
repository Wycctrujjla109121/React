import './SendPosts.css'
import Post from '../post/posts.jsx'

const SendPost = () => {
  let postData = [
    { id: 1, img: "https://sun9-28.userapi.com/impf/c824503/v824503099/1758cd/FuaPI1dPq0E.jpg?size=483x259&quality=96&sign=7676fe76512aebb93eda62d45d4e13f9&type=album", message: "Hi, how are u ?" },
    { id: 1, img: "https://sun9-23.userapi.com/impf/c637625/v637625112/50ed3/qMecn9fosxQ.jpg?size=1080x982&quality=96&sign=6e3f97f441344f5c8163b6730f06abaf&type=album", message: "It's my first post" }
  ]

  return (
    <div className='send_post'>
      <h2 className='send_post__label'>My post</h2>
      <textarea className='send_post__textarea' placeholder='your news...'></textarea>
      <button className='send_post__button'>Отправить</button>

      <div className='new__post'>
        {postData.map(element => <Post id={element.id} img={element.img} message={element.message}/>)}
      </div>
    </div>
  );
}

export default SendPost