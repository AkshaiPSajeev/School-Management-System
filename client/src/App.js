import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
