import { useState, useEffect } from 'react'

const Brand = () =>
  <div className="brand font-black text-3xl dark:text-gray-500">
    IZZ.
  </div>

const DarkModeSlider = () => {

  const [isDarkMode, setisDarkMode] = useState(false)

  // dark mode control function
  function controlMode() {
    // if current theme is light
    if (!isDarkMode) {
      // change to dark theme
      localStorage.theme = 'dark'
      setisDarkMode(true)
      document.querySelector('body').classList.add('dark')
    }
    // if current theme is dark
    else {
      // change to light theme
      localStorage.theme = 'light'
      setisDarkMode(false)
      document.querySelector('body').classList.remove('dark')
    }
  }

  useEffect(() => {
    // initial theme is light
    if (localStorage.theme === undefined) localStorage.theme = 'light'
    // keep the dark mode if user was using it in last visit
    if (localStorage.theme === 'dark') {
      setisDarkMode(true)
      document.querySelector('body').classList.add('dark')
    }

  }, [isDarkMode])

  return (
    <div onClick={controlMode} className={`dark-mode-slider flex rounded-full ${isDarkMode ? 'bg-gray-800 flex-row-reverse' : 'bg-white'} w-24 p-1 items-center gap-2 cursor-pointer`}>
      <div className={`button w-8 h-8 ${isDarkMode ? 'bg-gray-500 flex-row-reverse' : 'bg-gray-300'} rounded-full`}></div>
      <div className={`status capitalize ${isDarkMode ? 'text-white' : ''}`}>{isDarkMode ? 'Dark' : 'Light'}
      </div>
    </div>)
}

export default function Navbar() {

  // function to control show / hide the navbar
  function controlShowHideNavbar() {
    // if users are scrolling down
    if (window.scrollY >= curScrollPos) {
      // show the navbar
      setisScrolledDown(true)
      setcurScrollPos(window.scrollY)
    }
    // if users are scrolling up
    else {
      // hide the navbar
      setisScrolledDown(false)
      setcurScrollPos(window.scrollY)
    }
  }

  const [isScrolledDown, setisScrolledDown] = useState(false)
  const [curScrollPos, setcurScrollPos] = useState()

  useEffect(() => {
    setcurScrollPos(window.scrollY)
    document.addEventListener('scroll', controlShowHideNavbar)

    return () => {
      document.removeEventListener('scroll', controlShowHideNavbar)
    }
  })

  return (
    <div className={`navbar bg-gray-50 dark:bg-gray-900 fixed left-0 right-0 z-10  min-h-0 py-4 px-8 transition duration-500 ease-in-out transform ${isScrolledDown ? '-translate-y-20' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Brand />
        <DarkModeSlider />
      </div>
    </div>
  )
}
