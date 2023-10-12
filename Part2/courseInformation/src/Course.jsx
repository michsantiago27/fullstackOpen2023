const Header = ({header}) => <h2>{header}</h2>

const Content = ({parts}) => {

  return (
    <ul>
      {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
    </ul>
  )
}

const ExercisesSum = ({totalExs}) => <ul>Total of {totalExs} exercises</ul>

const Course = ({course}) => {
  const totalExs = course.parts.reduce((accumulator, currentValue) => accumulator += currentValue.exercises, 0)

  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <ExercisesSum totalExs={totalExs}/>
    </div>
  )
}

export default Course