// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {happyCustomerReview: false}

  happyCustomer = () => {
    this.setState({happyCustomerReview: true})
  }

  render() {
    const {happyCustomerReview} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return happyCustomerReview ? (
      <div className="app">
        <div className="customer-feedback-card">
          <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
          <h1 className="card-heading">Thank You</h1>
          <p className="customer-feedback">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    ) : (
      <div className="app">
        <div className="feedback-card">
          <h1 className="card-heading">
            How satisfied are you with our customer support performance
          </h1>
          {/* 
              <div className="emoji-list">
            <div>
              <img src={emojis[0].imageUrl} className="emoji" alt="Sad" />
              <p className="emoji-type">{emojis[0].name}</p>
            </div>
            <div>
              <img src={emojis[1].imageUrl} className="emoji" alt="None" />
              <p className="emoji-type">{emojis[1].name}</p>
            </div>
            <div>
              <img
                src={emojis[2].imageUrl}
                className="emoji"
                alt="Happy"
                onClick={this.happyCustomer}
              />
              <p className="emoji-type">{emojis[2].name}</p>
            </div>
          </div> 
          */}
          <ul className="emoji-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <img
                  src={emoji.imageUrl}
                  className="emoji"
                  alt={emoji.name}
                  onClick={this.happyCustomer}
                  // onClick={emoji.name === 'Happy' ? this.happyCustomer : null} for only single emoji
                />
                <p className="emoji-type">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
