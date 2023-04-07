import Container from '@/components/Main/Container'
import Aside from '@/components/Aside/Main'
import ListOfSideBtns from '@/components/Aside/ListOfSideBtns'

import Notes from './notes'

// import Nav from '@/components/Aside/Nav'
// import Image from 'next/image'

import Avatar from "boring-avatars";
import EmptyStart from '@/components/Main/EmptyStart';

export default function Home() {
  return (
    <>
      <div className="md:hidden flex flex-col w-full space-y-3 pt-2">

        <div className="px-2 bg-slate- w-full">
          <div className="py-1 px-4">
            <div className="bg-gray-200 rounded-full p-1 flex items-center justify-between">
              <button id="-" className="rounded-full bg-red- hover:bg-gray-300 p-1.5">
                <i className="icon icon-ic_fluent_navigation_20_regular flex text-lg"></i>
              </button>

              <div className="flex items-center space-x-3">
                <button id="-" className="rounded-full bg-red- hover:bg-gray-300 p-1.5">
                  <i className="icon icon-ic_fluent_grid_20_regular flex text-lg"></i>
                </button>
                <button id="-" className="rounded-full bg-red- hover:bg-gray-300">
                  <Avatar
                    size={30}
                    name="Ackerman"
                    variant="beam"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                  />
                  {/*<i className="icon icon-ic_fluent_navigation_20_regular flex text-lg"></i>*/}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 overflow-y-auto p2">
          <p className="text-xs md:text-sm opacity-70 mb-2 ml-3">Notes</p>
          <Notes/>
        </div>

      </div>

      <div className="hidden md:flex w-full">
        <Container>
          <EmptyStart/>
        </Container>
      </div>
      
      <button id="floating-btn" className="floating-btn absolute w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center right-5 bottom-5 md:hidden focus:outline-none ring-2 ring-gray-100 focus:ring-violet-500/40">
        <i className={`icon icon-ic_fluent_add_20_regular flex text-lg mx-0.5`}></i>
      </button>
    </>
  )
}
