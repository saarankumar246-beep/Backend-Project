import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import useLocalStorage from './hooks/useLocalStorage'

const Home = lazy(() => import('./pages/Home'))
const Auth = lazy(() => import('./pages/Auth'))
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'))
const AddProperty = lazy(() => import('./pages/AddProperty'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Listings = lazy(() => import('./pages/Listings'))

function App() {
  const [theme, setTheme] = useLocalStorage('curator-theme', 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/details" element={<PropertyDetails />} />
              <Route path="/add-property" element={<AddProperty />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
