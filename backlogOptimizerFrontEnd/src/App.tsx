import Optimizer from './pages/optimizer'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FloatingDock } from "./components/ui/floating-dock";
import { HiOutlineHome } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";

function App() {
  const navItems = [
    {
      title: "Home",
      icon: <HiOutlineHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
      href: "/",
    },
    {
      title: "Optimizer",
      icon: <FaChartLine className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
      href: "/optimizer",
    },
  ];
  
  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/optimizer' element={<Optimizer />} />
          </Routes>
          <FloatingDock 
            items={navItems} 
            desktopClassName="fixed bottom-4 left-1/2 transform -translate-x-1/2"
            mobileClassName="fixed bottom-2 right-2 flex justify-center"
          />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
