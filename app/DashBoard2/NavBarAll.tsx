

"use client"


import React from 'react'
import TeamSwitcher from './components/team-switcher'
import { MainNav } from './components/main-nav'
import { Search } from './components/search'
import { UserNav } from './components/user-nav'

const NavBarAll = () => {
  return (
    <div  className=" flex-col md:flex overflow-hidden">
          <div className="border-b  overflow-x-scroll ">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavBarAll