import React, {useState} from 'react'
import { SideBarInner } from './SideBar'

export default function RightDrawer({stats}) {
  const [view, setView] = useState(false);

  return (
    <div style={view?{}:{display:"none"}}className="RightDrawer_Container__13rg3">
      <div className="RightDrawer_RightDrawer__14364 RightDrawer_Open__3G12d">
        <div className="RightDrawer_DrawerHeader__cPfru">
          <button onClick={()=>setView(false)} className="RightDrawer_Left__2ajv-">
            <img src="./static/media/Left.aabb139d.svg" />{" "}
          </button>
          <span style={{ paddingBottom: 3 }}>Back to Questions</span>
        </div>
       <SideBarInner  stats={stats}/>
      </div>
      <div className="Backdrop_Backdrop__3j6VK" />
    </div>
  )
}
