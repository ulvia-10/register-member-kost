import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Login from './pages/Login';
import ListMember from './pages/ListMember';
import About from './pages/About'
import AddMember from './pages/AddMember';
import Review from './pages/Review';
import Editmember from './pages/Editmember';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/login' element={<Login/>}> </Route>
    <Route path='/ListMember' element={<ListMember/>}></Route>
    <Route path='/AddMember' element={<AddMember/>}></Route>
    <Route path='/Review' element={<Review/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/EditMember/:id' element={<Editmember/>}></Route>
    </Routes>
  );
}

export default App;
