import React from "react";

const EveryMonth=({getInfo})=>{
    console.log(getInfo)
    return(
        <div className="weekmenu">
            <div className="Everyday-block">
                    <p>Every</p>
                        <input id="month-day"
                        className="weekly-input"
                        defaultValue={getInfo[0]}
                        type="number"
                        min="1"
                        max="31"
                        >
                        </input>
                    <p>day of month at</p>

                            <input
                            className="weekly-input"
                            id="month-day-time"
                            defaultValue={getInfo[1]}
                            type="time"
                            
                            
                            >
                            </input>
                </div>
        </div>

    );
};
export default EveryMonth;