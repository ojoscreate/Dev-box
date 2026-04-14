// import React from "react";
import PropTypes from 'prop-types';

function Student(props) {
    return(
        <div className="Student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes": "No"}</p>
            <p>Is {props.name} in school? {props.isPresent? `Yes, ${props.name} is in school`: `No, ${props.name} is'nt in school`}  </p>
        </div>
    )
}
Student().propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool,
    isPresent: PropTypes.bool,
}
Student().defaultProps = {
    name: "Guest",
    age: 10,
    isStudent: false,
    isPresent: true,
}
export default Student;