// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqItem, changeAnswer, result} = props
  const {id, questionText, answerText} = faqItem
  const answer = () => {
    changeAnswer(id)
  }
  const image = result
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
  const altMsg = result ? 'minus' : 'plus'
  return (
    <li className="faqitem">
      <div className="box">
        <h1>{questionText}</h1>
        <button onClick={answer}>
          <img src={image} alt={altMsg} />
        </button>
      </div>
      {result && <p>{answerText}</p>}
    </li>
  )
}

export default FaqItem
