import {INCREMENT,DECREMENT} from './action_types'

export const incrementAction = value=>({type:INCREMENT,data:value})

export const decrementAction = value=>({type:DECREMENT,data:value})

export const incrementAsyncAction = (value,delay)=>{
    return (dispatch)=>{ //return a function and thunk will help you solve cant retun obj issue
        setTimeout(()=>{
            dispatch(incrementAction(value))
        },delay)
    }
}