import Link from "next/link";

import SideBtn from '@/components/Aside/SideBtn'
import SideLink from '@/components/Aside/SideLink'

export default function ListOfSideBtns(){
  return (
    <div className="space-y-1 w-full bg-slate- font-medium py-2">
      {/* <Link href={"/new"} className="text-blue-500 hover:text-blue-600 hoverunderline hover:bg-blue-100 p-4 rounded-full">New note</Link> */}
      <SideBtn  text={"New note"} icon={"ic_fluent_add_20_regular"} style={"border border-blue-200 bg-blue-200/20 hover:bg-blue-200 text-blue-500 pr-4 mb-3"}/>
      <SideLink text={"Home"} href={"/"} icon={"ic_fluent_home_20_regular"}/>
      {/*<SideLink text={"Settings"} href={"/settings"} icon={"ic_fluent_settings_20_regular"}/>*/}
      <SideLink text={"Help and feedback"} href={"/help"} icon={"ic_fluent_info_20_regular"} style={"w-full"}/>
    </div>
  )
}
