import Counter from '../components/counter'
import {connect} from 'react-redux'
import {incrementAction,decrementAction, incrementAsyncAction} from '../redux/action_creator'


//formal way
// function mapStateToProps(state){
//     return {count:state}
// }

//simple way
//let mapStateToProps=(state) => ({count:state})

//formal way
// function mapDispatchToProps(dispatch){
//     return {
//         increment:(value)=>{dispatch(incrementAction(value))},
//         decrement:(value)=>{dispatch(decrementAction(value))}
//     }
// }

//simple way
// let mapDispatchToProps = (dispatch)=>(
//     {
//         increment:(value)=>{dispatch(incrementAction(value))},
//         decrement:(value)=>{dispatch(decrementAction(value))}
//     }
// )

//more simple way


export default connect((state)=>({count:state}),
{
    increment:incrementAction,
    decrement:decrementAction,
    incrementAsync:incrementAsyncAction
}
)(Counter)

//connect
//function connect(para)=>{
    //return (value)=>{dispatch(para(value))}
//}