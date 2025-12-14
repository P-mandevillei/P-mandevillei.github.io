import { useState } from 'react'
import './App.css'
import Beyond from './components/Beyond'
import Education from './components/Education'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Research from './components/Research'
import Volunteering from './components/Volunteering'
import { ThemeContext } from './contexts/themeContext'
import { motion } from 'framer-motion';

export type themeType = 'light' | 'dark';
export const cardThemes = {
  dark: {
    backgroundColor: "#1e1e24",
    color: "#e0e0e0",
    borderLeftColor: "#00f2ff",
  },
  light: {
    backgroundColor: "#fffffff0",
    color: "#000000",
    borderLeftColor: "#fff700",
  },
};

function App() {

  const [theme, setTheme] = useState<themeType>('dark');

  return <motion.div
    animate={{
      backgroundColor: theme === 'dark' ? '#121212' : '#d8d4d4ff',
    }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={theme==='dark'? 'darkmode': 'lightmode'} id='app'
  >
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Intro />
      <Education />
      <Projects />
      <Research />
      <Volunteering />
      <Beyond />
    </ThemeContext.Provider>
  </motion.div>
}

export default App
