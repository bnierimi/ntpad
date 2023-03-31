import React from 'react'
import SideBar from './SideBar'

export default function Main() {
  return (
    <aside id='aside-right' className="px- bg-rose-200 h-full hidden md:flex w-[25%]">
      <div className="h-full py-4">
        <SideBar/>
      </div>
      <main className="w-full bg-green-500 h-full">
        {/* About Note */}
      </main>
    </aside>
  )
}
