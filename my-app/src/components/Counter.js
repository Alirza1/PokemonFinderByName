import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Counter() {

    const count=useSelector((state)=>state.count.value)

  return (
    <div>
      <div>
        <button aria-label='Increment Value'>Increment</button>
        <span>{count}</span>
        <button aria-label='Decrement Value'>Decrement</button>
      </div>
    </div>
  )
}
