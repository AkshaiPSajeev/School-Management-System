
import {Routes,Route} from 'react-router-dom'
import StudentHome from './pages/Student/StudentHome';
import StudentLoginPage from './pages/Student/StudentLoginPage';
import TeacherLoginPage from './pages/Teacher/TeacherLoginPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import LandingPage from './pages/Home/LandingPage';
import AdminHome from './pages/Admin/AdminHome';
import TeacherHome from './pages/Teacher/TeacherHome';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/student_login' element={<StudentLoginPage/>}/>
        <Route path='/teacher_login' element={<TeacherLoginPage/>}/>
        <Route path='/admin_login' element={<AdminLoginPage/>}/>
        <Route path='/student' element={<StudentHome/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/teacher' element={<TeacherHome/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
