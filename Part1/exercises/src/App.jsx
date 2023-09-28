// Header with the number of the course
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Content that renders each part of the course and its number of exercises individually
const Content = (props) => {
  return (
    <div>
      <Part partName={props.part1} numberExercises={props.exercises1}/>
      <Part partName={props.part2} numberExercises={props.exercises2}/>
      <Part partName={props.part3} numberExercises={props.exercises3}/>
    </div>
  )
}

// Part component that returns Part name and number of exercises on a <p> tag
const Part = (props) => {
  return (
    <div>
      <p>
        {props.partName} {props.numberExercises}
      </p>
    </div>
  )
}


// Total sum of the exercises from all courses
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  //const definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App