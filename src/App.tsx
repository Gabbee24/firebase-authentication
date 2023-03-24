import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './Pages/main/Main';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import CreatePost from './Pages/create-post/CreatePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/createpost' element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
