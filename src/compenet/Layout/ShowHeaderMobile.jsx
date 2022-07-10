import React from 'react'

export default function ShowHeaderMobile() {
  return (
    <div className="Layout_ShowHeaderMobile__19zX0">
    <header className="Header_Header__1xrSh">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%"
        }}
      >
        <span className="Header_showDesktop__2pBC1">
          <span className="Header_TimeDetails__24XAt">00 </span>
          <span>:</span>
          <span className="Header_TimeDetails__24XAt">50</span>
          <span>:</span>
          <span className="Header_TimeDetails__24XAt">00</span>
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
      </div>
      <div className="Header_InstructionsAndSideDiv__2PHz3">
        <button className="Header_showMenuButton__-doVo">
          <img src="/static/media/menu.e55ffa45.svg" />
        </button>
      </div>
    </header>
  </div>
  )
}
