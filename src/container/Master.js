import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Homepage from './Homepage/Homepage'

const Master = () => {
  return (
    <div>
      <Route exact path='/' component={Homepage} />


    </div>
  )
}

export default Master
