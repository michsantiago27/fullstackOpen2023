import { useState } from 'react'

const Button = props => <button onClick={props.handleClick}>{props.buttonName} {props.stateValue}</button>

const StatisticLine = props => {
  
  const goodState = props.feedbacks.goodState
  const neutralState = props.feedbacks.neutralState
  const badState = props.feedbacks.badState
  const totalCount = goodState + neutralState + badState

  if (props.text === "Good feedback")
    return (
      <tr>
        <td>{props.text}</td>
        <td>{goodState}</td>
      </tr>
    )
  if (props.text === "Neutral feedback")
  return (
    <tr>
      <td>{props.text}</td>
      <td>{neutralState}</td>
    </tr>
  )
  if (props.text === "Bad feedback")
  return (
    <tr>
      <td>{props.text}</td>
      <td>{badState}</td>
    </tr>
  )
  if (props.text === "Total feedbacks received")
  return (
    <tr>
      <td>{props.text}</td>
      <td>{goodState + neutralState + badState}</td>
    </tr>
  )  
  if (props.text === "Average score")
  return (
    <tr>
      <td>{props.text}</td>
      <td>{(goodState - badState) / totalCount}</td>
    </tr>
  )
  if (props.text === "Positive percentage")
  return (
    <tr>
      <td>{props.text}</td>
      <td>{(goodState*100)/totalCount}%</td>
    </tr>
  )  
  else
    return (
      <td>Could not match the component text to any component</td>
    )
}

const Statistics = props => {
  
  let totalCount = props.goodState + props.neutralState + props.badState

  if (totalCount === 0) 
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback has been submitted</p>
      </div>
    )

  else 
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good feedback" feedbacks={props}/>
            <StatisticLine text="Neutral feedback" feedbacks={props}/>
            <StatisticLine text="Bad feedback" feedbacks={props}/>
            <StatisticLine text="Total feedbacks received" feedbacks={props}/>
            <StatisticLine text="Average score" feedbacks={props}/>  
            <StatisticLine text="Positive percentage" feedbacks={props}/>
          </tbody>
        </table>
      </div>
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
      <Statistics goodState={good} neutralState={neutral} badState={bad}/>
    </div>
  )
}

export default App

/** table structure 
 * 
 * <table>
 * <tbody>
 *  <tr>        table row
 *    <th>      table headers
 *    <th>
 *    <th>
 *  </tr>
 *  <tr>        first row of data
 *    <td>      table data
 *    <td>
 *    <td>
 *  </tr>
 * </tbody>
 * </table>
 * 
 */