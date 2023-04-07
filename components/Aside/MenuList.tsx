import Link from 'next/link'
import React from 'react'

export default function MenuList() {
  return (
    <div className="w-full h-full p-2 space-y-2 rounded-lg bg-gray-300 absolute right-0 bottom-0 mt-2 shadow">
      <Link href={"/"}>
        <i className="icon icon- flex text-lg"></i>
        <p className="">Bin</p>
      </Link>
    </div>
  )
}
