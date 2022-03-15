import './App.css';
import Header from './components/header/header.jsx';
import Slidebar from './components/slidebar/slidebar.jsx';
import Profile from './components/profile/profile.jsx'
import Dialogs from './components/dialogs/dialogs.jsx'
import NotFound from './components/not__found/not__found.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />

        <Slidebar />

        <div className='wrapper__content'>
          <Routes>
            <Route path="/profile" element={<Profile ava="https://sun9-2.userapi.com/impg/-j9worTvE5IfcH945LpaEKW82Y_j3ERaq4T4jQ/726Akmx5W4M.jpg?size=1620x2160&quality=96&sign=37dd87aa78ac07a7ef6dd911f36ebcbb&type=album" />} />
            <Route path="/dialogs" element={<Dialogs />} />
            {/* <Route path="/news" element={<News />} /> */}
            {/* <Route path="/music" element={<Music />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;