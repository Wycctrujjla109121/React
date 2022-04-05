import MyPost from './SendPosts/SendPosts.jsx'
import ProfileInfo from './profile__info/profile__info.jsx'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo ava={props.ava}/>

            <MyPost postData={props.state.postData} 
            newPostChange={props.state.newPostChange}
            addPost={props.addPost}
            update={props.update}/>
        </div>
    );
}

export default Profile;