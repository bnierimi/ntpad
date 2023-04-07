"use client"

import React, { useCallback, useState } from 'react'
import Link from 'next/link'

import Nav from './Nav'

import Avatar from "boring-avatars";
import MenuList from './MenuList';

// import "alpinejs"

export default function Main({ children }: any) {
  const [valueDrawer, setValueDrawer] = useState(false);

  const onClickDrawer = () => {
    setValueDrawer(!valueDrawer);
    // console.log(valueDrawer)
  };

  return (
    <aside id='aside-left' className="px-2 py-4 bg-gray- h-full hidden md:flex md:w-4/12 lg:w-3/12 flex-col space-y-4 relative">

      <section className="px-2 bg-green-">

        {/* <Nav/> */}
        <nav className="flex items-center justify-between md:px-2 py- bg-slate-">
          <div className="flex items-center space-x-2 bg-gray- p-1pr-2 rounded-full">
            <p className="font-semibold text-xl">notepad</p>
          </div>
          <button id="" onClick={onClickDrawer} className="rounded-full bg-red- hover:bg-gray-300 p-2">
            <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-lg"></i>
          </button>
        </nav>

      </section>

      {
        valueDrawer ? <div className="w-full h-full p-2 space-y-1 rounded-lg bg-gray-200 absolute right-0 bottom-0 mt-2 shadow- z-40">
                  <div className="flex items-center justify-between p-2">
                    <button id="" onClick={onClickDrawer} className="rounded-full bg-red- hover:bg-gray-300 p-2">
                      <i className="icon icon-ic_fluent_arrow_left_20_regular flex text-lg"></i>
                    </button>
                    <button id="" className="rounded-full bg-red- hover:bg-gray-300 p-2">
                      <i className="icon icon-ic_fluent_weather_moon_20_regular flex text-lg"></i>
                    </button>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link href={"/new"}>
                        <div className="hover:bg-gray-300 rounded-lg px-1 py-2 flex items-center space-x-2">
                          <i className="icon icon-ic_fluent_add_20_regular flex text-xl ml-1"></i>
                          <p className="">New note</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/l"}>
                        <div className="hover:bg-gray-300 rounded-lg px-1 py-2 flex items-center space-x-2">
                          <i className="icon icon-ic_fluent_tag_circle_20_regular flex text-xl ml-1"></i>
                          <p className="">Labels</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/bin"}>
                        <div className="hover:bg-gray-300 rounded-lg px-1 py-2 flex items-center space-x-2">
                          <i className="icon icon-ic_fluent_delete_20_regular flex text-xl ml-1"></i>
                          <p className="">Bin</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div> : ""
      }

      <section className="px-4">
        <input type="text" placeholder="Search..." className="bg-gray-300 rounded px-2 py-1.5 w-full text-sm border-b-2 border-b-transparent focus:border-b-gray-500 focus:outline-none"/>
      </section>

      <section className="overflow-y-auto bg-amber-1">
        { children }
      </section>
    </aside>
  )
}
