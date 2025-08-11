'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  mobile?: boolean
  onItemClick?: () => void
}

export default function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Hjem' },
    { href: '/tjenester', label: 'Tjenester' },
    { href: '/priser', label: 'Priser' },
    { href: '/om', label: 'Om Marit' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  const baseClasses = mobile
    ? 'block py-2 text-lg'
    : 'px-4 py-2'

  return (
    <ul className={mobile ? 'space-y-2' : 'flex space-x-2'}>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={`
                ${baseClasses}
                ${isActive 
                  ? 'text-quilt-burgundy font-medium' 
                  : 'text-gray-700 hover:text-quilt-burgundy'
                }
                transition-colors duration-200
                ${!mobile && 'rounded-lg hover:bg-quilt-cream'}
              `}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}