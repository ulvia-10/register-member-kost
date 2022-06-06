import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Login from './pages/Login';
import Review from './pages/Review';
import ListMember from './pages/ListMember';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/login' element={<Login/>}> </Route>
    <Route path='/review' element={<Review/>}> </Route>
    <Route path='/ListMember' elemet={<ListMember/>}></Route>
    </Routes>
  );
}

export default App;