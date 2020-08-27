import React from 'react';
import './Subject.css';

const Subject = (props) => {
    const subject = props.subject;
    const totalPrice = subject.reduce((sum, subject) => sum + subject.price, 0)
    return (
            <div className ='enroll-container' class="p-3 mb-2 bg-info text-white       sticky-top" >
                <h2> Enroll Summary</h2>
                <h3>Total Enroll : {subject.length} </h3>
                <h4>Total Enroll Price : ${totalPrice} </h4>
                
            </div>
    );
};

export default Subject;