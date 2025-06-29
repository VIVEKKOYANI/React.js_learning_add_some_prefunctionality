import './App.css'
import WithoutUseMemo from './components/WithoutUseMemo'
import WithUseMemo from './components/WithUseMemo'
import WithoutuseCallback from './components/withoutuseCallback'
import WithuseCallback from './components/WithuseCallback'
import MainRoutes from './routes/MainRoutes'

function App() {

  return (
    <>
      {/* <WithoutUseMemo />
      <WithUseMemo />
      <WithuseCallback /> */}
      <MainRoutes />
    </>
  )
}

export default App
