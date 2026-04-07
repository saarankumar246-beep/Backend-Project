export function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-6-5.686-6-10a6 6 0 0112 0c0 4.314-6 10-6 10z" />
      <circle cx="12" cy="9" r="2.2" />
    </svg>
  )
}

export function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21h16V7H4v14z" />
      <path d="M8 7V3h8v4" />
      <path d="M9 12h2M13 12h2M9 16h2M13 16h2" />
    </svg>
  )
}

export function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M12 15v2M12 7v2" />
      <path d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
    </svg>
  )
}

export function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-8-6.14-8-11.5S7.716 3 12 7.036 20 3.5 20 9.5 12 21 12 21z" />
    </svg>
  )
}

export function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}
