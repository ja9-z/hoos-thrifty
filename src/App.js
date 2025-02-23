import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from "./components/Header"
import Welcome from "./pages/Welcome"
import MainScreen from "./pages/MainScreen"
import NoPage from "./pages/NoPage"
import SellerScreen from "./pages/SellerScreen"
import Prompts from "./pages/Prompts"
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();  // ✅ Tracks location changes

  return (
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>  {/* ✅ Ensures exit animations work */}
              <Route index element={<Welcome />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/main" element={<MainScreen />} />
              <Route path="/seller" element={<SellerScreen />} />
              <Route path="/prompts" element={<Prompts />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
      </AnimatePresence>
  );
}

export default function App() {
  return (
      <Router>
          <AnimatedRoutes />
      </Router>
  );
}


