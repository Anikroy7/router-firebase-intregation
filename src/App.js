
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Orders from './Components/Orders/Orders';
import Register from './Components/Register/Register';
import RequiredAuth from './RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/orders' element={
          <RequiredAuth>
            <Orders></Orders>
          </RequiredAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
