import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';

const Create_employee = () => {
	var [name, setName] = useState('')
	var [pay, setPay] = useState('')

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
			pay: pay
		}
		
		console.log(emp)

		axios.post(port+'create', emp).then(res => console.log(res.data))

		window.location = '/'
	}


	return(
		<div>
      <h3>Add Employee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Salary: </label>
          <input 
              type="text" 
              className="form-control"
              value={pay}
              onChange={(e) => setPay(e.target.value)}
              />
        </div>

        <div className="form-group py-2">
					
          <input type="submit" value="Add Employee" className="btn btn-primary" />
        </div>
      </form>
    </div>

	)
	}

export default Create_employee;