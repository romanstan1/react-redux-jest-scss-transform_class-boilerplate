import React, {Component} from 'react'
import Header from './Header'
import {connect} from 'react-redux'

class VisPage extends Component {


  update = (event, target) => {
    console.log('click',event.target);
    console.log(this.props.dispatch({type: 'UPDATE_VIS_PAGE', value: 10}))
  }

  render () {
    return (
      <span>
        <Header/>
        <div style={{width:'100%', textAlign:'center', marginTop:100}}> - VIS PAGE - </div>
        <div
          onClick={this.update}
          style={{cursor:'pointer', width:'100%', textAlign:'center', marginTop:100}}> UPDATE </div>
      </span>
    )
  }
}


export default connect(state => ({
}))(VisPage)
