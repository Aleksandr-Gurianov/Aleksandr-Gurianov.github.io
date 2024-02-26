import { BrowserRouter } from "react-router-dom";
import './App.css'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
    </>
  )
}

export default App
