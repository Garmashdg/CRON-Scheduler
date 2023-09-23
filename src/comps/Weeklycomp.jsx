import React from "react";

const Weeklycomp=({minutes})=>{



    if (minutes>59)
    {
        minutes=59;
    }
    


    
    return(
        <div  className="weekmenu">
            <div className="week-items">
                    <p>Every</p>
                            <input id="daily-in"
                            defaultValue={minutes}
                            type="number"
                            min="1"
                            max="59"

                            className="weekly-input"
                            
                            >
                            </input>
                    <p>minutes</p>
            </div>
           
        </div>

    );
};
export default Weeklycomp;