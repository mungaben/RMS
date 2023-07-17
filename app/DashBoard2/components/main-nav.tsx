

"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
       <Link
        href="/Admin"
        className="hidden text-sm font-medium transition-colors hover:text-primary md:flex"
      >
        Admin
      </Link>
      <Link
        href="/ReportTables"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Reports
      </Link>
      <Link
        href="/"
        className="hidden text-sm font-medium transition-colors hover:text-primary md:flex"
      >
        Home
      </Link>
      {/* <Link
        href="/"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Settings
      </Link> */}
    </nav>
  )
}