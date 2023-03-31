import React from 'react'
import Nav from './Nav'

import Avatar from "boring-avatars";

export default function Main({ children }: any) {
  return (
    <aside id='aside-left' className="px-4 pt-4 bg-rose- h-full hidden md:flex w-3/12 flex-col space-y-4">
      <Nav/>

      { children }
    </aside>
  )
}
