import React from 'react'

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  width: "300px",
  height: "100px",
  background: "#5199FF",
  color: "white",
}

const User = (data) => {
  return (
    <div className="user" style={style}>
      <h3>{`${data.firstName} ${data.lastName}`}</h3>
      <h5>{`${data.age} year\`s old`}</h5>
    </div>
  )
}

export default User


