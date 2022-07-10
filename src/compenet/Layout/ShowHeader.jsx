import React from 'react'

export default function ShowHeader({test, time}) {
  return (
    <div className="Layout_ShowHeader__1AcZz">
    <header className="Header_Header__1xrSh">
      <div className="Header_Title__3mXad">
        <p>{test.name}</p>
      </div>
      <div className="Header_InstructionsAndSideDiv__2PHz3">
        <span style={{ display: "flex", alignItems: "center" }}>
          Time Taken:
          <span className="Header_showDesktop__2pBC1">
            <span className="Header_TimeDetails__24XAt">{Math.floor(time/(1000*60*60))}</span>
            <span>:</span>
            <span className="Header_TimeDetails__24XAt">{Math.floor(time/(1000*60))%60}</span>
            <span>:</span>
            <span className="Header_TimeDetails__24XAt">{((time/(1000))%60)*60}</span>
          </span>
          <div className="Header_showMobile__3xmfN">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/static/media/back.55f34807.svg"
                style={{ paddingRight: "2rem" }}
              />
            </div>
            <img src="/static/media/time.718535a6.svg" />
            <span style={{ padding: "1rem" }}> 00 :50:00</span>
          </div>
        </span>
      </div>
    </header>
  </div>
  )
}
