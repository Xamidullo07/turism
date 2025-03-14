"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MapIcon, Hotel, Landmark, UserCircle, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const NavLinks = () => (
    <>
      <Link 
        href="/cadastre"
        className={`flex items-center space-x-2 ${pathname === '/cadastre' ? 'text-primary' : 'text-muted-foreground'}`}
        onClick={() => setIsOpen(false)}
      >
        <MapIcon className="h-4 w-4" />
        <span>Cadastre</span>
      </Link>
      
      <Link 
        href="/landmarks"
        className={`flex items-center space-x-2 ${pathname === '/landmarks' ? 'text-primary' : 'text-muted-foreground'}`}
        onClick={() => setIsOpen(false)}
      >
        <Landmark className="h-4 w-4" />
        <span>Landmarks</span>
      </Link>
      
      <Link 
        href="/hotels"
        className={`flex items-center space-x-2 ${pathname === '/hotels' ? 'text-primary' : 'text-muted-foreground'}`}
        onClick={() => setIsOpen(false)}
      >
        <Hotel className="h-4 w-4" />
        <span>Hotels</span>
      </Link>
    </>
  )

  const AuthButtons = () => (
    <>
      <Link href="/login" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="text-muted-foreground">
          <UserCircle className="h-5 w-5 mr-2" />
          Login
        </Button>
      </Link>
      <Link href="/register" onClick={() => setIsOpen(false)}>
        <Button>Register</Button>
      </Link>
    </>
  )
  
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="flex items-center font-bold text-xl">
          <Landmark className="mr-2 h-6 w-6" />
          Tourism
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 ml-8">
          <NavLinks />
        </div>
        
        <div className="hidden md:flex ml-auto items-center space-x-4">
          <AuthButtons />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                <div className="flex flex-col space-y-2 mt-4">
                  <AuthButtons />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}