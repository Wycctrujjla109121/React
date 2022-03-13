import './App.css';
import Header from './components/header/header.jsx';
import Slidebar from './components/slidebar/slidebar.jsx';
import Profile from './components/profile/profile.jsx'
import Dialogs from './components/dialogs/dialogs.jsx'
import NotFound from './components/not__found/not__found.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />

        <Slidebar />
        <div className='wrapper__content'>
          <Routes>
            <Route path='/profile' element={<Profile ava='https://sun9-23.userapi.com/impf/c637625/v637625112/50ed3/qMecn9fosxQ.jpg?size=1080x982&quality=96&sign=6e3f97f441344f5c8163b6730f06abaf&type=album' />} />
            <Route path='/dialogs' element={<Dialogs />} />
            {/* <Route path='/news' element={<News />} /> */}
            {/* <Route path='/music' element={<Music />} /> */}
            {/* <Route path='/settings' element={<Settings />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
