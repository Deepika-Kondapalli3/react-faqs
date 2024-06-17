// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'
class Faqs extends Component {
  state = {faqs: []}
  componentDidMount() {
    const {faqsList} = this.props
    const updatedFaqsList = faqsList.map(each => ({...each, isAnswered: false}))
    this.setState({faqs: updatedFaqsList})
  }
  changeAnswer = id => {
    const {faqs} = this.state
    const updatedFaqs = faqs.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isAnswered: !each.isAnswered,
        }
      }
      return each
    })
    this.setState({faqs: updatedFaqs})
  }

  render() {
    const {faqs} = this.state
    return (
      <div className="app-container">
        <h1>FAQs</h1>
        <ul type="none">
          {faqs.map(each => (
            <FaqItem
              faqItem={each}
              changeAnswer={this.changeAnswer}
              result={each.isAnswered}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
