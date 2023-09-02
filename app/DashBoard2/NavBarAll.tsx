

"use client"


import RegionsTeams from './components/RegionsTeams'
import { MainNav } from './components/main-nav'
import { UserNav } from './components/user-nav'

const NavBarAll = () => {
  return (
    <div  className="flex-col z-50 overflow-hidden fixed w-full md:flex shadow-md border-none border-gray-200 ">
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