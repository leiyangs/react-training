import React from 'react'
import { Route } from '../react-router-dom'

export default function(WrapperComponent) {
  return props=><Route component={WrapperComponent}/>
}
