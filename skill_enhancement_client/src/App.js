
import Home from './components/home/home.js';
import Login from './components/login/login.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup.js';
import Contact from './components/contact/contact.js';
import Course from './components/courses/course.js';
import Reactcourse from './components/courses/reactcourse.js';
import Javacourse from './components/courses/Javacourse.js';
import Dscourse from './components/courses/Dscourse.js';
import Certificates from './components/certificates/certificates.js';
import Process from './components/Process/Process.js';
import {VideoJsx} from './components/video/videoJsx.js';
import { ReactComp } from './components/video/videoReact.js';
import { ComponentsInter } from './components/video/videoComp.js';
import { VideoHooks } from './components/video/videoHooks.js';
import { AddCourse } from './components/courses/addCourse.js';
import Quiz from './components/quiz/Quiz.js';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
    <Route path="/signup" element ={<Signup/>}/>
    <Route path="/home" element ={<Home/>}/>
    <Route path="/course" element ={<Course/>}/>
    <Route path="/certificates" element ={<Certificates/>}/>
    <Route path="/process" element ={<Process/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/contact" element ={<Contact/>}/>
    <Route path="/react" element ={<Reactcourse/>}/>
    <Route path="/java" element ={<Javacourse/>}/>
    <Route path="/ds" element ={<Dscourse/>}/>
    <Route path='/videoJsx' element={<VideoJsx/>}/>
    <Route path='/ReactComp' element={<ReactComp/>}/>
    <Route path='/ComponentsInter' element={<ComponentsInter/>}/>
    <Route path='/videoHooks' element={<VideoHooks/>}/>
    <Route path='/addCourse' element={<AddCourse/>}/>
    <Route path='/quiz' element={<Quiz/>}/>


      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
