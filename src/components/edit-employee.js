import React from 'react'
import port from "./port"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Edit_employee = (props) => {
	var [name, setName] = useState('')
	var [pay, setPay] = useState('')

  const id  = window.location.pathname.substring(6)

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
			pay: pay
		}
		
		console.log(emp)

		axios.post(port+'update/'+id, emp).then(res => console.log(res.data))
		
		window.location = '/'
	}

	useEffect(() => {
		axios.get(port+id).then(res => {
			var e = res.data
			setName(e.name) 
			setPay(e.pay)
		})
	}, [])

	return(
		<div>
      <h3>Edit Employee</h3>
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
					
          <input type="submit" value="Update Employee" className="btn btn-primary"/>
        </div>
      </form>
    </div>

	)
	}

export default Edit_employee;