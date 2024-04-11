import React from 'react'

export default function NLDT_Funcdemo(props) {
  return (
    <div>
    <hr/>
    <h2>NLDT_Func compoment demo</h2>
    <h3>sử dụng thuộc tính từ props</h3>
    <p>userName: {props.userName}</p>
    <p>fullName: {props.fullName}</p>
    <p>age: {props.age}</p>
    </div>
  )
}

