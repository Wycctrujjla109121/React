import './../posts/post.css'

const Post = () => {
    return(
        <div className='post'>
          <h2 className='post__label'>My post</h2>
          <textarea className='post__textarea' placeholder='your news...'></textarea>
          <button className='post__button'>Отправить</button>
        </div>
    );
}

export default Post