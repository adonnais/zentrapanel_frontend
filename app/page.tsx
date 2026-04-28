'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors">
      
      {/* Toggle Dark / Light */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-50 flex items-center gap-2 rounded-full border px-4 py-2 text-sm
          bg-white dark:bg-gray-800
          text-gray-700 dark:text-gray-200
          border-gray-200 dark:border-gray-700
          hover:scale-105 transition"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      {/* Formulario */}
      <div className="w-full lg:w-1/3 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">

          {/* Logo mobile */}
          <div className="flex justify-center mb-6 lg:hidden">
            <img src="/logo.png" alt="Logo" className="w-40" />
          </div>

          <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center lg:text-left">
            Iniciar sesión
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg px-4 py-2
                  bg-white dark:bg-gray-800
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full rounded-lg px-4 py-2
                  bg-white dark:bg-gray-800
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg font-medium
                bg-blue-600 hover:bg-blue-700
                text-white transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Imagen */}
      <div className="hidden lg:flex w-2/3 relative overflow-hidden">
        <img
          src="/login-bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <img src="/logo.png" alt="Logo" className="w-[70vh] object-contain" />
        </div>
      </div>
    </div>
  )
}
