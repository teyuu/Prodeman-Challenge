import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import FormResult from './components/FormResult/FormResult';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FormEdit from './components/FormResult/FormEdit'
import ResultCard from './components/FormResult/ResultCard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' forceRefresh={true} element={<Home/>}/>
      <Route path='/result' element={<FormResult/>}/>
      <Route path='/edit' element={<ResultCard/>}/>
    </Routes>
  );
}

export default App;
