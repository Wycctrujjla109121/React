import './posts.css'

const Post = (props) => {
  return (
    <div className='posts'>
      <img className='posts__avatar' src={props.img} alt="" />
      <p className='posts__text'>{props.message}</p>
    </div>
  );
}

export default Post;