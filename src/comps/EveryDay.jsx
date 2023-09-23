import React from "react";

const EveryDay=({times})=>{
    
    return(
        <div className="weekmenu">
            <div className="Everyday-block">
                    <p>Every day at</p>

                        <input id="timeevery-0"
                        defaultValue={times[0]}
                        type="time"
                        className="weekly-input"
                        >
                        </input>
                    <p>and</p>
                        <input id="timeevery-1"
                        defaultValue={times[1]}
                        type="time"
                        className="weekly-input"
                        >
                        </input>
            </div>
        </div>

    );
};
export default EveryDay;