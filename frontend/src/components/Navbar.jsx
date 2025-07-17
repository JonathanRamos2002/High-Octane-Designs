import React from 'react'
import {PlusIcon} from "lucide-react"

const Navbar = () => {
  return (
    <header className="navbar bg-base-300 border-b border-base-300">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">High Octane Designs</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><a href="/create"><PlusIcon className="inline-block mr-2" />Create Note</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
