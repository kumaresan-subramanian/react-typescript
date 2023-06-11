import { useReducer } from "react"

type CounterState = {
  count: number
}
type UpdateAction = {
  type : 'increment' | 'decrement',
  payLoad: number
}

type ResetAction = {
  type : 'reset'
}

type CounterAction = UpdateAction | ResetAction;
const InitialState = {
  count : 0
}
function reducer(state:CounterState , action:CounterAction){

  switch(action.type){
    case 'increment':
      return { count : state.count + action.payLoad }
    case 'decrement':
      return { count : state.count - action.payLoad }
    case 'reset':
      return InitialState  
    default:
      return state
  }
}

export const Counter = () =>{

  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({type: 'increment', payLoad: 10})}>
        increment 10
      </button>
      <button onClick={() => dispatch({type: 'decrement', payLoad: 10})}>
        decrement 10
      </button>
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
    </>
  )
}