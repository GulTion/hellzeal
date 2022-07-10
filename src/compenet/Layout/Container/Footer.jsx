import React from 'react'

export default function Footer({onChoose, len}) {
  return (
    <div className="Footer_Footer__3Fh5s">
    <button onClick={()=>onChoose(i=>i>0?i-1:i)} className="Footer_MoveToQuestionBig__1-jSA" disabled="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={12}
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.31581 12C7.16558 12 7.01378 11.95 6.88703 11.8499L0.255075 6.5186C0.0938927 6.3888 0 6.19331 0 5.98531C0 5.77888 0.0938927 5.58183 0.255075 5.45359L6.85886 0.150475C7.15306 -0.0856714 7.5834 -0.0387554 7.8197 0.255255C8.05599 0.549264 8.00905 0.979331 7.71485 1.21548L1.77457 5.98531L7.74458 10.7849C8.03878 11.021 8.08573 11.4511 7.84943 11.7451C7.71328 11.9124 7.51611 12 7.31581 12Z"
          fill="#444"
        />
      </svg>
      <span style={{ paddingLeft: 8 }}>Previous</span>
    </button>

    {/* <button className="Footer_MoveToQuestionSmall__pDk2u" disabled="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={12}
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.31581 12C7.16558 12 7.01378 11.95 6.88703 11.8499L0.255075 6.5186C0.0938927 6.3888 0 6.19331 0 5.98531C0 5.77888 0.0938927 5.58183 0.255075 5.45359L6.85886 0.150475C7.15306 -0.0856714 7.5834 -0.0387554 7.8197 0.255255C8.05599 0.549264 8.00905 0.979331 7.71485 1.21548L1.77457 5.98531L7.74458 10.7849C8.03878 11.021 8.08573 11.4511 7.84943 11.7451C7.71328 11.9124 7.51611 12 7.31581 12Z"
          fill="#444"
        />
      </svg>
      <span>Previous</span>
    </button> */}

    <button onClick={()=>onChoose(i=>(len-1)>i?(i+1):i)} className="Footer_MoveToQuestionBig__1-jSA">
      <span style={{ paddingRight: 8 }}>Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={12}
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.684194 12C0.834423 12 0.986216 11.95 1.11297 11.8499L7.74492 6.5186C7.90611 6.3888 8 6.19331 8 5.98531C8 5.77888 7.90611 5.58183 7.74492 5.45359L1.14114 0.150475C0.846941 -0.0856714 0.416601 -0.0387554 0.180304 0.255255C-0.0559931 0.549264 -0.00904655 0.979331 0.285151 1.21548L6.22543 5.98531L0.255417 10.7849C-0.0387793 11.021 -0.0857258 11.4511 0.150571 11.7451C0.286716 11.9124 0.48389 12 0.684194 12Z"
          fill="#009AE0"
        />
      </svg>
    </button>

    {/* <button className="Footer_MoveToQuestionSmall__pDk2u">
      <span>Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={12}
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.684194 12C0.834423 12 0.986216 11.95 1.11297 11.8499L7.74492 6.5186C7.90611 6.3888 8 6.19331 8 5.98531C8 5.77888 7.90611 5.58183 7.74492 5.45359L1.14114 0.150475C0.846941 -0.0856714 0.416601 -0.0387554 0.180304 0.255255C-0.0559931 0.549264 -0.00904655 0.979331 0.285151 1.21548L6.22543 5.98531L0.255417 10.7849C-0.0387793 11.021 -0.0857258 11.4511 0.150571 11.7451C0.286716 11.9124 0.48389 12 0.684194 12Z"
          fill="#009AE0"
        />
      </svg>
    </button> */}
  </div>
  )
}
