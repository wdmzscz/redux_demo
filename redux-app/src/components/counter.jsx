//import store from './redux/store'
import React, {Component} from 'react'

export default class Counter extends Component{

    componentDidMount(){
      console.log(this.props)
    }

    increment =()=>{
      let {value} = this.selectNumber;
      //this.props.store.dispatch(incrementAction(value*1))
      this.props.increment(value*1)
    }

    
    decrement =()=>{
      let {value} = this.selectNumber;
      //this.props.store.dispatch(decrementAction(value*1))
      this.props.decrement(value*1)
    }

    incrementIfOdd=()=>{
      debugger;
      let {value} = this.selectNumber;
      let count = this.props.count;
       if(count%2===1){
        this.props.increment()
      }
    }

    incrementAsync=()=>{
      let {value} = this.selectNumber;       
      this.props.incrementAsync(value*1,1000);
    }

    render(){
      let count = this.props.count;
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
