

"use client"


import React from 'react'
import TeamSwitcher from './components/team-switcher'
import { MainNav } from './components/main-nav'
import { Search } from './components/search'
import { UserNav } from './components/user-nav'
import RegionsTeams from './components/RegionsTeams'

const NavBarAll = () => {
  return (
    <div  className="flex-col overflow-hidden  md:flex">
          <div className="overflow-x-scroll border-b ">
          <div className="flex items-center h-16 px-4">
            <RegionsTeams/>
            <MainNav className="mx-6" />
            <div className="flex items-center ml-auto space-x-4">
           
              <UserNav />
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavBarAll