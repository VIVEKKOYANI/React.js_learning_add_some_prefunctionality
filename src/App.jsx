import './App.css'
import WithoutUseMemo from './components/WithoutUseMemo'
import WithUseMemo from './components/WithUseMemo'
import WithoutuseCallback from './components/withoutuseCallback'
import WithuseCallback from './components/WithuseCallback'

function App() {

  return (
    <>
      <WithoutUseMemo />
      <WithUseMemo />
      <WithuseCallback />
    </>
  )
}

export default App
