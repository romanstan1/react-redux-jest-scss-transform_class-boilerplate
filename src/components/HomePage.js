import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Homepage extends Component {

  render () {
    return (
      <span className='full-page'>
        <div> - HOME PAGE - </div>
        <Link to='/visualisation'> ENTER </Link>
      </span>)
  }
}
