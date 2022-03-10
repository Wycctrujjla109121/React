import './App.css';
import Header from './components/header/header.jsx';
import Slidebar from './components/slidebar/slidebar.jsx';
import Profile from './components/profile/profile.jsx'


const App = () => {
  return (
    <div className='wrapper'>
      <Header />

      <Slidebar />

      <Profile ava='https://sun9-23.userapi.com/impf/c637625/v637625112/50ed3/qMecn9fosxQ.jpg?size=1080x982&quality=96&sign=6e3f97f441344f5c8163b6730f06abaf&type=album'/>
    </div>
  );
}

export default App;
