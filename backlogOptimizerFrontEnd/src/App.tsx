import './App.css'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'
import Optimizer from './pages/optimizer'
import About from './pages/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FloatingDock } from "./components/ui/floating-dock";
import { HiOutlineHome } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { IoConstructOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import Github from "@/components/github";

function App() {
  const navItems = [
    {
      title: "Home",
      icon: <HiOutlineHome className="h-full w-full text-neutral-500 dark:text-white"/>,
      href: "/",
    },
    {
      title: "Optimizer",
      icon: <FaChartLine className="h-full w-full text-neutral-500 dark:text-white"/>,
      href: "/optimizer",
    },
    {
      title: "About",
      icon: <FaRegLightbulb className="h-full w-full text-neutral-500 dark:text-white"/>,
      href: "/about"
    },
    {
      title: "Future Updates",
      icon: <IoConstructOutline className="h-full w-full text-neutral-500 dark:text-white"/>,
      href: "/updates"
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-neutral-500 dark:text-white"/>,
      href: "https://github.com/Hcran18/backlogOptimizer"
    },
    {
      title: "Support Me",
      icon: <IoGiftOutline className="h-full w-full text-neutral-500 dark:text-white"/>,
      href: "https://buymeacoffee.com/huntercrandall"
    }
  ];
  
  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/optimizer' element={<Optimizer />} />
            <Route path='/about' element={<About />} />
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
