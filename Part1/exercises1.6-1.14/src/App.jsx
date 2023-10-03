import { useState } from 'react'

const Button = props => <button onClick={props.handleClick}>{props.buttonName} {props.stateValue}</button>

const AverageComponent = props => {
  return (
    <div>Average score: {(props.goodCount - props.badCount) / props.totalCount}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countGood = () => setGood(good + 1)
  const countNeutral = () => setNeutral(neutral + 1)
  const countBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback to Unicafe</h1>
      <p>
        <Button handleClick={countGood} buttonName={"Give good feedback"}/>
        <Button handleClick={countNeutral} buttonName={"Give neutral feedback"}/>
        <Button handleClick={countBad} buttonName={"Give bad feedback"}/>
      </p>
      <h2>Statistics</h2>
      <p>Good feedback: {good}</p>
      <p>Neutral feedback: {neutral}</p>
      <p>Bad feedback: {bad}</p>
      <p>Total feedbacks received: {good + neutral + bad}</p>
      <AverageComponent goodCount={good} badCount={bad} totalCount={good + neutral + bad}/>  
      <p>Positive percentage: {(good*100)/(good+neutral+bad)}%</p>
    </div>
  )
}

export default App
