import {Component} from 'react'
import './index.css'

export default class ShowHide extends Component {
  state = {fn: false, ln: false}

  firstname = () => {
    this.setState(prevState => ({fn: !prevState.fn}))
  }

  lastname = () => {
    this.setState(prevState => ({ln: !prevState.ln}))
  }

  render() {
    const {fn, ln} = this.state
    const firstN = fn ? 'showFname' : null
    const name1 = fn ? 'Joe' : null
    const lastN = ln ? 'showLname' : null
    const name2 = ln ? 'Jonas' : null

    return (
      <div className="container">
        <h1 className="head">Show/Hide</h1>
        <button type="button" onClick={this.firstname}>
          Show/Hide Firstname
        </button>
        <div className={firstN}>
          <p className="first">{name1}</p>
        </div>
        <button type="button" onClick={this.lastname}>
          Show/Hide Lastname
        </button>
        <div className={lastN}>
          <p className="second">{name2}</p>
        </div>
      </div>
    )
  }
}
