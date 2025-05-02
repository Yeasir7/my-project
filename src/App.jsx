import './App.css'
import BarChart from './components/BarChart/BarChart'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/navBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyUi/DaisyNav'

function App() {

  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <NavBar></NavBar>
      
      <br />
      <PriceOptions></PriceOptions>
      <br /><br />
      <LineChart></LineChart>
      <br /><br />
      <BarChart></BarChart><br />
      <Phones></Phones>
    </>
  )
}

export default App
