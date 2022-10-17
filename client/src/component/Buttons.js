
const Buttons = (props) =>  {
    
    return (
      
        <div className="buttons">
        {
              !props.active && !props.isPaused ?
                <button onClick={props.handleStart}>Start</button>
                : (
                  props.isPaused ? <button onClick={props.handlePause}>Pause</button> :
                    <button onClick={props.handleResume}>Resume</button>
                )
            }
          <button onClick={props.handleReset} >Reset</button>
          </div>
  
    
  )
}

export default Buttons;
