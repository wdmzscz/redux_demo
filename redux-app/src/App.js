import './App.css';
//import store from './redux/store'
import React, {Component} from 'react'

export default class App extends Component{

    componentDidMount(){
      console.log(this.props.store.getState())
    }

    increment =()=>{
      let {value} = this.selectNumber;
      this.props.store.dispatch({
        type:'increment',
        data:value*1
      })
    }

    
    decrement =()=>{
      let {value} = this.selectNumber;
      this.props.store.dispatch({
        type:'decrement',
        data:value*1
      })
    }

    incrementIfOdd=()=>{
      debugger;
      let {value} = this.selectNumber;
      let count = this.props.store.getState();
       if(count%2===1){
        this.props.store.dispatch({
          type:'increment',
          data:value*1
        })
      }
    }

    incrementAsync=()=>{
      let {value} = this.selectNumber;
       setTimeout(()=>{        
        this.props.store.dispatch({
          type:'increment',
          data:value*1
        })
      },1000)
    }

    render(){
      let count = this.props.store.getState();
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
