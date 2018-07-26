import React, { Component } from "react";
import './Students.css'

class Customers extends Component {
    constructor (props){
        super(props);
        this.state = {
            students : [],

        }
    }
    componentDidMount() {
       console.log('Did mount')
       fetch("/students")
       .then(res => res.json())
       .then(students => this.setState({students}))
    }
    render () {
     
        return <div className="students">
            <h1>Integrify Students</h1>
            <h4>Number of Integrify students:{this.state.students.length}</h4>
            <h2>Students</h2>
            <ul>
            
            {this.state.students.map((student,i) => {
                return <li key={"student" +i}> {student.id}. {student.firstName} {student.lastName} </li>
            })}
         
             
            </ul>
          </div>;
    }
}

export default Customers;