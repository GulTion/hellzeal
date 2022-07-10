import React from 'react'

export function SideBarInner({stats,onChoose}){
  return <div  className="Sidebar SidebarForIphoneSelector">
  <div className="Section_Section__LqS2d">
    <div className="Section_Profile__2cp14">
      <div className="Profile_Profile__3HF8E">
        <div className="Profile_ProfileInitials__3lnBD"> D</div>
        <span className="Profile_profileName__1Q4bY">DUMB MAN </span>
      </div>
    </div>
    <div className="Overview_Overview__31Ph8">
      <div
        className="Overview_Overview__31Ph8"
        style={{ boxShadow: "none" }}
      >
        <div className="Overview_OverviewItems__2hcs_">
          <span className="Overview_TotalQuestionText__3hdYD">
            Marks : 0
          </span>
        </div>
        <div
          className="Overview_OverviewItems__2hcs_"
          data-cy="openSectionInstructionModal"
        />
        <div className="Overview_OverviewItems__2hcs_">
          <span style={{ marginLeft: 8 }}>
            <span className="Hexagon_Hexagon__3N6s0 Hexagon_HexagonNA__1dJQK">
              0
            </span>
          </span>
          <span className="Overview_nameText__1Ztei">Incorrect</span>
        </div>
        <div className="Overview_OverviewItems__2hcs_">
          <span style={{ marginLeft: 8 }}>
            <span className="Hexagon_Hexagon__3N6s0 Hexagon_HexagonA__aAK_J">
              0
            </span>
          </span>
          <span className="Overview_nameText__1Ztei">Correct</span>
        </div>
        <div className="Overview_OverviewItems__2hcs_">
          <span style={{ marginLeft: 8 }}>
            <span className="Circle_Circle__36nKz ">0</span>
          </span>
          <span className="Overview_nameText__1Ztei">Marked</span>
        </div>
        <div className="Overview_OverviewItems__2hcs_">
          <span style={{ marginLeft: 8 }}>
            <span className="Square_Square__1aWHd">25</span>
          </span>
          <span className="Overview_nameText__1Ztei">Unattempted</span>
        </div>
        <div className="Overview_OverviewItems__2hcs_">
          <span style={{ marginLeft: 8 }}>
            <span className="Square_Square__1aWHd Square_partially__2zT-y">
              0
            </span>
          </span>
          <span className="Overview_nameText__1Ztei">
            Partially correct
          </span>
        </div>
      </div>
    </div>
    <div className="QuestionNavigation_QuestionNavigation__vXnJu">
      <div className="QuestionNavigation_Header__1bpcw">
   {stats.name}
      </div>
      <div className="QuestionNavigation_Content__3XJ7g">
        {Array.from({length:stats.totalQuestions}).map((e,i)=>{
return    <span style={{ cursor: "pointer" }} onClick={()=>onChoose(i)}>
<span className="Square_Square__1aWHd">{i+1}</span>
</span>
        })}
     
      
      </div>
    </div>
  </div>
  <div className="Section_SubmitBtn__1I6oZ">
    <div data-cy="viewSummary" className="Section_SubmitButton__3XQJ9">
      View Summary
    </div>
  </div>
</div>
}

export default function SideBar({stats,onChoose}) {
  // console.log(stats);
  return (
    <div className="Sidebar ">
      {stats&&<SideBarInner onChoose={onChoose} stats={stats}/>}
  </div>
  )
}
