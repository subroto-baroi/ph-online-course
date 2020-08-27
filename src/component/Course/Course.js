import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import courses from '../../fakeData/Courses';
import './Course.css';

const Course = (props) => {
    const {name, price, duration} = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div className="main-container" class=" bg-light text-white">
            <div className="course-container">            
                <h2 class='text-dark'> Course Name : {name}</h2>
                <h3>Course price : ${price} </h3>
                <h4>Course duration : {duration} </h4>
                <button class ='btn btn-warning' onClick={() => handleAddCourse(props.course) }>Enroll</button>
            </div>

        </div>

        
    );
};

export default Course;