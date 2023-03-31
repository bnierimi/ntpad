import React from 'react'

export default function Nav({ children }: any) {
  return (
    <nav className="bg-green- px-2 flex items-center md:rounded-t-lg">
      {children}
    </nav>
  )
}
