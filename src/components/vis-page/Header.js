import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

  render () {
    return (
        <nav>
          <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/'> One </Link></li>
            <li><Link to='/'> Two </Link></li>
            <li><Link to='/'> Three </Link></li>
          </ul>
        </nav>
    )
  }
}
