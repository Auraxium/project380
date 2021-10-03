import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import port from "./port"

var temp = [];

const Employee = (props) => (
	<tr>
    <td>{props.employee.name}</td>
    <td>{props.employee.pay}</td>
    <td><a href="#" onClick={() => { props.delete(props.employee._id) }}>delete</a></td>
  </tr>
)

const divStyle = {
	float:'right'
};



const Employee_list = () => {
    var [employees, setEmployees] = useState([]);

		const deleteEmployee = (id) => {
			axios.delete(port+id).then(res => console.log(res.data)).catch(e => console.log(e + "; doesnt exist"));
   	  setEmployees(employees.filter(i => i._id !== id));
		}

		const listEmployees = () => (
			  employees.map(i => {
					return <Employee employee={i} delete={(id) => deleteEmployee(id)} key={i._id}/>
				})
		)

		useEffect(() => {
			axios.get(port)
			.then(response => {setEmployees(response.data); temp = [...response.data]})
			.catch(e => console.log(e));
		}, [])

		//if(!employees.length)
		//	return(<div>no employees lmao</div>)
    
    return(
        <div>
					<div className="d-md-flex justify-content-between align-items-center">
            <h3>Employees</h3>
						<div>
							<i className="bi bi-search p-1"></i>
							<input className="" placeholder="Search Employee" 
								type="text" style={divStyle} 
								onChange={e => setEmployees(temp.filter(i => i.name.includes(e.target.value)))}></input>
						</div>
					</div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                      <th>Name</th>
                      <th>Salary</th>
											<th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {listEmployees()}
                </tbody>
            </table>
        </div>
    )

	}

export default Employee_list

//const search = (s) => {
//	if(!s) {
//		setEmployees([...temp])
//		return
//	}
//	//if(!temp)
//	//	temp = [...employees]
//
//	setEmployees(employees.filter(i => 
//		i.name.includes(s)
//	))
//	employees = [...temp];
//	//console.log(temp)
//}