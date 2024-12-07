"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Search, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme-toggle'

export function Navbar() {
  const pathname = usePathname()

  const routes = [
    { href: '/shop/men', label: 'Men' },
    { href: '/shop/women', label: 'Women' },
    { href: '/shop/kids', label: 'Kids' },
    { href: '/new-arrivals', label: 'New Arrivals' },
    { href: '/sale', label: 'Sale' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">StyleHub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === route.href ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}