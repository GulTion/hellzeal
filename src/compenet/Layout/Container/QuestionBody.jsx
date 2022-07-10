import React from 'react'

export default function QuestionBody({que}) {
  return (
    <div className="Question_Body__32R5l imageViewerDiv">
    <div className="Question_QuestionContainer__2Elg3">
      <span dangerouslySetInnerHTML={{__html:que.name}}>
        
      </span>
    </div>

    {<div className="Options_Container__2YfYv">
        {que.options.map(e=>{
            return   <div className={`Options_OptionSolution__mjez2 ${e.isCorrect?"Options_correctOption__3CDkO":""}`}>
            <label
              htmlFor="6034df2a5d94665307d56245"
              style={{
                padding: "1rem 1rem 1rem 0px",
                width: "100%",
                boxSizing: "border-box"
              }}
            >
            {(e.type==="multiple_choice"||e.type===undefined) && <div className="Options_OptionContainer__1WGbi ">
                <span className="Options_ContainerContent__1JQzB">
                  <span dangerouslySetInnerHTML={{__html:e.name}}>
                 
                  </span>
                </span>
              </div>}
             {e.type==="constants"&& <div class="Options_OptionContainer__1WGbi Options_OptionColumner__YuHcV"><span class="Options_ContainerContent__1JQzB">Not Attempted</span><span>Correct Answer :{e.solution.map(k=><span> {k};</span>)}</span></div>}
            </label>
          </div>
        })}
        </div>
    }
    
     

    <div className="Question_questionSolutionHeader__2VyJN">
      <span />
      <span />
    </div>
    <div className="Question_questionSolutionHeader__2VyJN">
      <span style={{ color: "rgb(82, 176, 98)", fontWeight: "bold" }}>
        Solution
      </span>
      <span />
    </div>
    <div className="Question_QuestionContainer__2Elg3">
      <span dangerouslySetInnerHTML={{__html:que.solution}}>
       
      </span>
    </div>
  </div>
  )
}
