import React, {Component} from 'react'

export default class ErrorPage extends Component {

  render () {
    return (
      <span className='full-page'>
        <div> 404 ERROR  <br/> PAGE NOT FOUND</div>
        <a href='/'>Go back home</a>
      </span>
    )
  }
}
