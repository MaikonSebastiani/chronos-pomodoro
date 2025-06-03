import styles from './style.module.scss'
import { HomeIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { RouterLink } from '../RouterLink'

type availableThemes = 'dark' | 'light'

export function Menu() {

  const [theme, setTheme] = useState<availableThemes>(() => {
    const savedTheme = (localStorage.getItem('theme') as availableThemes) || 'dark'
    return savedTheme
  })

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  const handleThemeChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()  
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return newTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={styles.menu}>
      <RouterLink href="/" aria-label="Home" title="Home"><HomeIcon /></RouterLink>
      <RouterLink href="/history" aria-label="History" title="History"><HistoryIcon /></RouterLink>
      <RouterLink href="/settings" aria-label="Settings" title="Settings"><SettingsIcon /></RouterLink>
      <a aria-label="Theme" title="Theme" onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  )
}