import React from 'react'

export default function QuestionHeader({que}) {
  return (
    <div className="Question_Header__Q3Hs6">
    <div className="Question_LeftLaptopView__3GepN">
      <span>Question-{que.order}</span>
    </div>
    <div className="Question_LeftMobileView__2cw-c">
      <span>Q-{que.order}</span>
    </div>
    <div className="Question_Right__9azQ5">
      <span className="Question_notAttemptedLabel__2aPIB">Unattempted</span>
      <div className="Question_Clock__13ic9">
        <img src="/static/media/clock.3726f35f.svg" />
        <span>00:00</span>
      </div>
      <div className="Dropdown_Dropdown__10Bmj">
        <div className="Dropdown_Btn__1bsgd">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="ellipsis-v"
            className="svg-inline--fa fa-ellipsis-v fa-w-6 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
          >
            <path
              fill="currentColor"
              d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
            />
          </svg>
        </div>
        <div
          className="Dropdown_Items__3pxXB Dropdown_Hide__OWJmp"
          style={{ right: 0, left: "auto" }}
        >
          <ul>
            <li>
              <span className="Question_DropDownListItem__uqp_M">
                <img
                  src="/static/media/report-icon.cffbed6b.svg"
                  style={{ marginRight: 10 }}
                />{" "}
                <p style={{ margin: "0.5rem 0px" }}>Report Question</p>
                Question
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="Modal_Container__252G4 Modal_Hidden__28Stw">
        <div className="Modal_Modal__1-5dN imageViewerDiv">
          <div className="FormatModal_FormatModal__19wsQ">
            <div className="FormatModal_Title__1b6qA">
              <p>Report Question</p>
            </div>
            <div className="FormatModal_Content__ZMTvU">
              <p style={{ padding: "1rem 2.4rem" }}>
                Help us understand the problem . Why is the question wrong ?
              </p>
              <div className="Question_ReportList__3KIze">
                <div>
                  <input
                    type="checkbox"
                    id="5d2c3d2febdee755034a8210"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="5d2c3d2febdee755034a8210">
                    Answer doesn't address the question that was asked
                  </label>
                </div>
              </div>
              <div className="Question_ReportList__3KIze">
                <div>
                  <input
                    type="checkbox"
                    id="5d2c3d41ebdee755034a8211"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="5d2c3d41ebdee755034a8211">
                    Not in English or has very bad formatting
                  </label>
                </div>
              </div>
              <div className="Question_ReportList__3KIze">
                <div>
                  <input
                    type="checkbox"
                    id="5d2c3d52ebdee755034a8212"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="5d2c3d52ebdee755034a8212">
                    Substantially incorrect question and/or incorrect
                    answers
                  </label>
                </div>
              </div>
              <div className="Question_ReportList__3KIze">
                <div>
                  <input
                    type="checkbox"
                    id="5d2c3d6febdee755034a8213"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="5d2c3d6febdee755034a8213">
                    Bad Image
                  </label>
                </div>
              </div>
              <div className="Question_ReportList__3KIze">
                <div>
                  <input
                    type="checkbox"
                    id="5d2c3d82ebdee755034a8214"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="5d2c3d82ebdee755034a8214">
                    Missing data and/or information
                  </label>
                </div>
              </div>
              <div className="Question_ReportList__3KIze">
                <div>
                  <input
                    type="checkbox"
                    id="5d2c3dbfebdee755034a8216"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="5d2c3dbfebdee755034a8216">
                    Spam. Undisclosed promotion for a link or product
                  </label>
                </div>
              </div>
              <p style={{ padding: "0rem 2.4rem" }}>
                <strong>Explanation</strong>
              </p>
              <input
                type="text"
                className="Question_ReportModal__3le5I"
                placeholder="Give feedback (optional)"
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  marginTop: 20,
                  borderTop: "1px solid rgb(204, 204, 204)"
                }}
              >
                <button disabled="" className="Button_Button__3gFiX">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <button className="Modal_CloseBtn__34fid">
            <img src="/static/media/crossModal.b5b57d5b.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
