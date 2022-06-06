import React, { useState } from 'react'

const Header = () => {
 let [workflowName,setWorkflowName] = useState()

  return (

    <div className='header' >
        
        <input  className='workflowName' placeholder='Workflow name' value={workflowName} onChange={(e)=>setWorkflowName(e.target.value)}/> 
        
        
        </div>
  )
}

export default Header