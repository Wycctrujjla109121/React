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
            <Route path="/profile" element={<Profile state={props.state.profilePage}
              dispatch={props.dispatch} />} />

            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}
              dispatch={props.dispatch} />} />
            {/* <Route path="/news" element={<News />} /> */}
            {/* <Route path="/music" element={<Music />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;