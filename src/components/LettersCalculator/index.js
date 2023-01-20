import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputVal: ''}

  updateInputVal = e => this.setState({inputVal: e.target.value})

  render() {
    const {inputVal} = this.state

    return (
      <div className="bg-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="content-wrapper">
          <h1>Calculate the Letters you enter</h1>
          <div className="input-wrapper">
            <label htmlFor="textInput">Enter the phrase</label>
            <input
              type="text"
              id="textInput"
              value={inputVal}
              placeholder="Enter the phrase"
              onChange={this.updateInputVal}
            />
            <div className="result-para">
              <p>No.of letters: {inputVal.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
