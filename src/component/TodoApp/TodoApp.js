import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {
    render() {
        return (
            <form className="todoapp_container">
         
              <form className="input_section" >
              <h1> TODOAPP</h1>
                  <input className="input" type="text" placeholder="Enter The Task" />
                  
              </form>
              <ul>

                  <li>
                      TASKS
                     <i className="fas fa-trash-alt"></i>
                  </li>
                  <li>
                      TASKS
                     <i className="fas fa-trash-alt"></i>
                  </li>
                  <li>
                      TASKS
                     <i className="fas fa-trash-alt"></i>
                  </li>
                  <li>
                      TASKS
                     <i className="fas fa-trash-alt"></i>
                  </li>
                  <li>
                      TASKS
                     <i className="fas fa-trash-alt"></i>
                  </li>
              </ul>
            </form>
        )
    }
}
