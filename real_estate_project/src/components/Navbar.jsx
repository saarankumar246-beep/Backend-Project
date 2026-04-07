import { Link, NavLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from './icons'

const navItems = [
  { label: 'Discover', path: '/' },
  { label: 'Market Trends', path: '/listings' },
  { label: 'Saved', path: '/dashboard' },
  { label: 'Concierge', path: '/auth' }
]

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="font-semibold text-slate-950 dark:text-white">
          Curator Estate
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-slate-950 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <Link
            to="/auth"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/add-property"
            className="inline-flex rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            List Property
          </Link>
        </div>
      </div>
    </header>
  )
}
