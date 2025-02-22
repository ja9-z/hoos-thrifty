import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Welcome from "./pages/Welcome"
import MainScreen from "./pages/MainScreen"
import NoPage from "./pages/NoPage"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path ="/welcome" element = {<Welcome />} />
          <Route path = "/main" element = {<MainScreen />} />
          <Route path = "*" element = {<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//export default App;
