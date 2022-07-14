import React from 'react'
import User from './components/User'
import { _DataMap } from 'react-binds';

const users = [
  {
    firstName: 'Thomas',
    lastName: 'Angeles',
    age: '27',
  },
  {
    firstName: 'Blake',
    lastName: 'Quintano',
    age: '25',
  },
  {
    firstName: 'Logan',
    lastName: 'Cookie',
    age: '20',
  },
  {
    firstName: 'Jeffrey',
    lastName: 'Collins',
    age: '26',
  },
]

const App = () => {
  return (
    <div className="example">
      <div className="data-map-example">
        <_DataMap data={users}>
          <User />
        </_DataMap>
      </div>
    </div>
  )
}

export default App
