import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume'   },
  { to: '/gallery',  label: 'Gallery'  },
  { to: '/blog',     label: 'Blog'     },
]

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
