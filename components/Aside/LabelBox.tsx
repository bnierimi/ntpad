import React, { useState } from 'react'
import SideBtn from './SideBtn'
import SideLink from './SideLink'

export default function LabelBox() {
  // const [first, setfirst] = useState(second);
  return (
    <div id='aside-someLabels-box' className="rounded-lg bg-gray-">
      <SideBtn id="aside-label-btn" text={"Labels"} icon={"ic_fluent_tag_circle_20_regular"}/>
      <div className="pt-1 bg-green- rounded-b-lg space-y- border-tborder-t-gray-200 hidde">
        <SideLink text={"@kagayaki"} href={"/label/kagayaki"} icon={"ic_fluent_tag_20_regular"}/>
        <SideLink text={"@reb-el"} href={"/label/reb-el"} icon={"ic_fluent_tag_20_regular"}/>
        <SideLink text={"Create new label"} href={"/label/new"} icon={"ic_fluent_add_20_regular"}/>

      </div>
    </div>
  )
}
