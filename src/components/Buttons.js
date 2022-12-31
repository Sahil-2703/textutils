import React from 'react'

export default function Buttons(props) {
  return (
    <div>
      <button disabled={props.disable} className="btn btn-primary btn-sm mx-1 my-1" onClick={props.btn_func} >{props.btn_name}</button>
    </div>
  )
}
