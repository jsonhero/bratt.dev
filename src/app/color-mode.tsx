'use client';
import { useState, useEffect, useCallback } from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

const isServer = typeof window === 'undefined'
const STORAGE_KEY = 'color-mode-key'
const DEFAULT_MODE = 'light'

function getMode(): string | null {
  if (!isServer) {
    const mode = window.localStorage.getItem(STORAGE_KEY)
    if (mode) {
      return mode
    }
  }
  return null
}

interface ColorModeProps {
  attribute: string;
}

export const ColorMode: React.FC<ColorModeProps> = ({
  attribute
}) => {
  const [mounted, setMounted] = useState(false)
  const [mode, setModeState] = useState(() => getMode() || DEFAULT_MODE)

  // useEffect only runs on the client, which safely avoids hydration mismatch when using 'mode' since local storage is not available on server
  useEffect(() => {
    setMounted(true)
  }, [])

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) {
        return
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      const nextMode = e.newValue || DEFAULT_MODE
      setModeState(nextMode)
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [setModeState])

  const applyMode = useCallback((nextMode: string) => {
    document.documentElement.className = nextMode
  }, [])


  const setMode = useCallback((nextMode: string) => {
    setModeState(nextMode)
    window.localStorage.setItem(STORAGE_KEY, nextMode);
  }, [])

  useEffect(() => {
    applyMode(mode)
  }, [mode, applyMode])


  return (
    <Button className="w-6 h-6" onClick={() =>  setMode(mode === 'dark' ? 'light' : 'dark')}>
      {mounted ? mode === 'light' ? <Sun /> : <Moon /> : <Sun /> }
    </Button>
  )
}