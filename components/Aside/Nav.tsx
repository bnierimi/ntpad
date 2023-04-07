import Avatar from "boring-avatars";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between md:px-2 py- bg-slate-">
      <div className="flex items-center space-x-2 bg-gray- p-1pr-2 rounded-full">
        {/*<Avatar
          size={30}
          name="NotePad"
          variant="marble"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />*/}
        <p className="font-semibold text-xl">notepad</p>
      </div>
      <button id="minimize-" className="rounded-full bg-red- hover:bg-gray-300 p-2">
        {/*<Avatar
          size={30}
          name="Ackerman"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />*/}
        <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-lg"></i>
      </button>
    </nav>
  )
}
