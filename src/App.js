import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import MoreData from './Components/MoreDeta/MoreData';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/more' element={<MoreData></MoreData>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
