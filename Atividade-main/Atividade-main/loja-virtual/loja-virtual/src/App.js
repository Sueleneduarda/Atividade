
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Pagelogin from './componetes/pages/pagelogin';
import Pagehome from './componetes/pages/pagehome';



function App() {
  return (
     <BrowserRouter>
    <Routes>
     <Route path='/' element={<Pagelogin/>}></Route>
     <Route path='/home'element={<Pagehome/>}></Route>
     
    </Routes>
   </BrowserRouter>
  );
}

export default App;
