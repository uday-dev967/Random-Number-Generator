import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNum = () => {
    const k = Math.ceil(Math.random() * 100)
    this.setState({num: k})
  }

  render() {
    const {num} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.generateNum}>
            Generate
          </button>
          <p className="heading">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
