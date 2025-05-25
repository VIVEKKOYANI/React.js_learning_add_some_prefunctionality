import Hello from './components/Hello'
import withMessage from './components/withMessage';
import './App.css'

function App() {
  const HelloWithMessage = withMessage(Hello);
  return (
    <>
      <HelloWithMessage message="hi" />
    </>
  )
}

export default App
