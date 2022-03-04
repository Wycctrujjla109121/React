import './App.css';
import Header from './components/header/header.jsx';
import Slidebar from './components/slidebar/slidebar.jsx';
import Profile from './components/content/profile/profile.jsx'
import Post from './components/content/posts/post.jsx'
import News from './components/content/news/news.jsx'


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Slidebar />
      <div className='current__profile'>
        <Profile />

        <Post />

        <News />


        
      </div>
    </div>
  );
}

export default App;
