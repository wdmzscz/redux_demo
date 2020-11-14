import './App.css';

import React, {Component} from 'react'

export default class App extends Component{
    state={
      count:0
    }

    increment =()=>{
      let {value} = this.selectNumber;
      let {count} = this.state;
      this.setState({
        count:value*1+count
      })
    }

    
    decrement =()=>{
      let {value} = this.selectNumber;
      let {count} = this.state;
      this.setState({
        count:count-value*1
      })
    }

    incrementIfOdd=()=>{
      let {value} = this.selectNumber;
      let {count} = this.state;
      if(count%2==1){
        this.setState({
          count:value*1+count
        })
      }
    }

    incrementAsync=()=>{
      let {value} = this.selectNumber;
      let {count} = this.state;
      setTimeout(()=>{        
        this.setState({
        count:value*1+count
      })},1000)
    }
    render(){
      let {count} = this.state
       return(
          <div>
            <h3>Count is {count}</h3>
            <select ref={(selectNumber)=>{this.selectNumber=selectNumber}}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>&nbsp; 
            <button onClick={this.increment}>+</button>&nbsp; 
            <button onClick={this.decrement}>-</button>&nbsp; 
            <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp; 
            <button onClick={this.incrementAsync}>increment async</button>&nbsp; 
          </div>
       )
    }
}
