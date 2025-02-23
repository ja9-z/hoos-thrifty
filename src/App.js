import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Welcome from "./pages/Welcome"
import MainScreen from "./pages/MainScreen"
import NoPage from "./pages/NoPage"
import SellerScreen from "./pages/SellerScreen"
import Prompts from "./pages/Prompts"


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path ="/welcome" element = {<Welcome />} />
          <Route path = "/main" element = {<MainScreen />} />
          <Route path = "/seller" element = {<SellerScreen/>}></Route>
          <Route path = "/prompts" element = {<Prompts/>}></Route>
          <Route path = "*" element = {<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//export default App;
