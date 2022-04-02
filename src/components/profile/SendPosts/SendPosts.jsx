import './SendPosts.css'
import Post from '../post/posts.jsx'
import react from 'react'

const SendPost = (props) => {
  let textareaText = react.createRef();
  let addPost = () => {
    props.addPost();
  }

  let changeTextarea = () => {
    let textChange = textareaText.current.value;
    props.update(textChange)
  }

  return (
    <div className='send_post'>
      <h2 className='send_post__label'>My post</h2>
      <textarea id='new-post' onChange={changeTextarea} value={props.newPostChange} ref={textareaText} className='send_post__textarea' placeholder='your news...'></textarea>
      <button onClick={addPost} className='send_post__button'>Отправить</button>

      <div className='new__post'>
        {props.postData.map(element =>
          <Post id={element.id} img={element.img} message={element.message} />
        )}
      </div>
    </div>
  );
}

export default SendPost