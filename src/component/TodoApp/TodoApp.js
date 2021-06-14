import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {


    state={
        input: "",
        tasks: []
    }


    handleChange=(event)=>{
        this.setState({
            
            input:event.target.value
        })
        

    }
    storeItems=(event)=>{
        event.preventDefault()

        const{ input }=this.state
      
        

        this.setState({
            tasks:[...this.state.tasks, input],
            input:""
        })
       
    }
    deleteItem=(key)=>{
      
        

    this.setState({
        tasks:this.state.tasks.filter((data,index)=>index !== key)
        
    })

    }
    render() {
        const { input, tasks } = this.state
     
        return (
            <div className="todoapp_container" onSubmit={this.storeItems}>
         
              <form className="input_section"  >
              <h1> TODOAPP</h1>
                  <input className="input" type="text" placeholder="Enter The Task" value={input} onChange={this.handleChange}/>
                  
              </form>
              <ul>
                  
                  {tasks.map((data, index)=>(

                

                      <li key={index}>{data}<i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
                  ))}
                 
              </ul>
            </div>
        )
    }
}
