import { useState, useEffect } from 'react'

const Brand = () =>
  <div className="brand font-black text-3xl dark:text-gray-500">
    IZZ.
  </div>

const DarkModeSlider = () => {

  const [isDarkMode, setisDarkMode] = useState(false)

  function controlMode() {
    if (!isDarkMode || window.matchMedia('(prefers-color-scheme: light)').matches) {
      localStorage.theme = 'dark'
      setisDarkMode(true)
      document.querySelector('body').classList.add('dark')
    } else {
      localStorage.theme = 'light'
      setisDarkMode(false)
      document.querySelector('body').classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === undefined) localStorage.theme = 'light'
    if (localStorage.theme === 'dark') {
      setisDarkMode(true)
      document.querySelector('body').classList.add('dark')
    }

  }, [isDarkMode])

  return <div onClick={controlMode} className={`dark-mode-slider flex rounded-full ${isDarkMode ? 'bg-gray-800 flex-row-reverse' : 'bg-white'} w-24 p-1 items-center gap-2 cursor-pointer`}>
    <div className={`button w-8 h-8 ${isDarkMode ? 'bg-gray-500 flex-row-reverse' : 'bg-gray-300'} rounded-full`}></div>
    <div className={`status capitalize ${isDarkMode ? 'text-white' : ''}`}>{isDarkMode ? 'Dark' : 'Light'}
    </div>
  </div>
}

export default function Navbar() {

  function controllShowHideNavbar() {
    if (window.scrollY >= curScrollPos) {
      setisScrolledDown(true)
      setCurScrollPos(window.scrollY)
    } else {
      setisScrolledDown(false)
      setCurScrollPos(window.scrollY)
    }
  }

  const [isScrolledDown, setisScrolledDown] = useState(false)
  const [curScrollPos, setCurScrollPos] = useState()

  useEffect(() => {
    setCurScrollPos(window.scrollY)
    document.addEventListener('scroll', controllShowHideNavbar)

    return () => {
      document.removeEventListener('scroll', controllShowHideNavbar)
    }
  })

  return (
    <div className={`navbar bg-gray-200 dark:bg-gray-900 fixed left-0 right-0 z-10  min-h-0 py-4 px-8 transition duration-500 ease-in-out transform ${isScrolledDown ? '-translate-y-20' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Brand />
        <DarkModeSlider />
      </div>
    </div>
  )
}
