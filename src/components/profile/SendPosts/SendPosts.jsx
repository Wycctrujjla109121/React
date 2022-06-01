import './SendPosts.css'
import Post from '../post/posts.jsx'
import { addPostActionCreator, changeTextareaActionCreator } from '../../../redux/ProfileReducer'

const SendPost = (props) => {


  let addPost = () => {
    if (props.newPostChange != '' && props.newPostChange != ' ')
      props.dispatch(addPostActionCreator());
  }

  let changeTextarea = (e) => {
    let textChange = e.target.value;
    props.dispatch(changeTextareaActionCreator(textChange))
  }

  return (
    <div className='send_post'>
      <h2 className='send_post__label'>My post</h2>
      <textarea id='new-post' onDragEnter={addPost} onChange={changeTextarea} value={props.newPostChange} className='send_post__textarea' placeholder='your news...'></textarea>
      <button onClick={addPost} className='send_post__button'>Отправить</button>

      <div className='new__post'>
        {props.postData.map(element =>
          <Post id={element.id} img={element.img} message={element.message} key={element.id} />
        )}
      </div>
    </div>
  );
}

export default SendPost