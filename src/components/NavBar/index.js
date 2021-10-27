import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {stopWatch, points} = this.props
    return (
      <div className="nav-bar-bg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="match-game-logo"
          />
        </div>
        <div className="score-timer-container">
          <p className="score"> Score: {points}</p>

          <div className="score-timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />

            <p className="score">{stopWatch} Sec</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
