import './App.css'
import UnControlledOnBoardingFlow from './UnControlledOnBoardingFlow'

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({name: "john Doe"})}>Next</button>
  </>
)

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({age: 100})}>Next</button>
  </>
)

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({hairColor: "brown"})}>Next</button>
  </>
)

function App() {

  return (
    <UnControlledOnBoardingFlow onFinish={(data) => console.log("Finish",data)}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UnControlledOnBoardingFlow>
  )
}

export default App
