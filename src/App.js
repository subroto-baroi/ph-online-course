import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './component/Course/Course';
import courses from './fakeData/Courses';
import { useState } from 'react';
import Subject from './component/Subject';


function App() {
      const first15 =courses.slice(0,14);  
      const [course, setCourse] = useState(first15);
      const [subject, setSubject] = useState([])
      const handleAddCourse = (course) =>{
      const newSubject = [...subject, course];
      setSubject(newSubject);
  }

  return (
      <div className="App">
        
          <Subject subject ={subject} ></Subject>
          
          {
            course.map(crs => <Course course ={crs} handleAddCourse={handleAddCourse}></Course>)
          }
        
      </div>
  );
}

export default App;
