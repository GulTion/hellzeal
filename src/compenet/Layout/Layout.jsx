import React, { useState } from 'react'
import Container from './Container'
import RightDrawer from './RightDrawer'
import ShowHeader from './ShowHeader'
import ShowHeaderMobile from './ShowHeaderMobile'
import SideBar from './SideBar'
export default function Layout({data}) {
  const [sei, setSi] = useState(0);
  const [currQ, setQ] = useState(0);
  // console.log();
  return (
    <div className="Layout">
      <ShowHeader test={data.test} time={data.timeTaken} />
   <ShowHeaderMobile />
<Container onChoose={setQ} que={data.sections[sei].questions[currQ]} len={data.sections[sei].questions.length}/>
 <SideBar onChoose={setQ} stats={data.sectionWiseStats[sei]} />
<RightDrawer onChoose={setQ}  stats={data.sectionWiseStats[sei]}/>
  </div>
  )
}
