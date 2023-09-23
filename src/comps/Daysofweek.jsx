
import React,{useState} from "react";



const Daysofweek= ({onChange,getStates})=>{
    function setall()
    {
        const days=[]
        days.push(Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday)
       onChange(days)
    }

    

    const[Sunday,setSunday]=useState(getStates[0])
    const[Monday,setMonday]=useState(getStates[1])
    const[Tuesday,setTuesday]=useState(getStates[2])
    const[Wednesday,setWednesday]=useState(getStates[3])
    const[Thursday,setThursday]=useState(getStates[4])
    const[Friday,setFriday]=useState(getStates[5])
    const[Saturday,setSaturday]=useState(getStates[6])



    //Callbacks
    const handleSundayChange = (event) =>{
        setSunday(event.target.checked)
         const days=[]
         days.push(event.target.checked,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday)
        onChange(days)
    }
    const handleMondayChange = (event) =>{
        setMonday(event.target.checked)
         const days=[]
         days.push(Sunday,event.target.checked,Tuesday,Wednesday,Thursday,Friday,Saturday)
        onChange(days)
    }
    const handleTuesdayChange = (event) =>{
        setTuesday(event.target.checked)
         const days=[]
         days.push(Sunday,Monday,event.target.checked,Wednesday,Thursday,Friday,Saturday)
        onChange(days)
    }
    const handleWednesdayChange = (event) =>{
        setWednesday(event.target.checked)
         const days=[]
         days.push(Sunday,Monday,Tuesday,event.target.checked,Thursday,Friday,Saturday)
        onChange(days)
    }
    const handleThursdayChange = (event) =>{
        setThursday(event.target.checked)
         const days=[]
         days.push(Sunday,Monday,Tuesday,Wednesday,event.target.checked,Friday,Saturday)
        onChange(days)
    }
    const handleFridayChange = (event) =>{
        setFriday(event.target.checked)
         const days=[]
         days.push(Sunday,Monday,Tuesday,Wednesday,Thursday,event.target.checked,Saturday)
        onChange(days)
    }
    const handleSaturdayChange = (event) =>{
        setSaturday(event.target.checked)
         const days=[]
         days.push(Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,event.target.checked)
        onChange(days)
    }
    setall();

    return(
        
        <div className="weekmenu">

                <div className="Dayofweek">
                    <div className="Dayofweek-1block">
                        <p className="Dayofweek-p">Every</p>
                        <div className="Dayofweek-2block">

                                <label >
                                            <input 
                                                    className="Dayofweek-2block-checkbox"
                                                    id="daysofweek-in"
                                                    defaultValue={getStates[0]}
                                                    type="checkbox"
                                                    checked={Sunday}
                                                    onChange={handleSundayChange}
                                                >
                                                </input>
                                    Sunday</label>
                                <label >
                                                <input 
                                                        className="Dayofweek-2block-checkbox"
                                                        id="daysofweek-in"
                                                        defaultValue={getStates[1]}
                                                        type="checkbox"
                                                        checked={Monday}
                                                        onChange={handleMondayChange}
                                                    >
                                                    </input>
                                    Monday</label>
                                <label >
                                            <input 
                                                    className="Dayofweek-2block-checkbox"
                                                    id="daysofweek-in"
                                                    defaultValue={getStates[2]}
                                                    type="checkbox"
                                                    checked={Tuesday}
                                                    onChange={handleTuesdayChange}
                                                >
                                                </input>
                                    Tuesday</label>
                                <label >
                                            <input 
                                                    className="Dayofweek-2block-checkbox"
                                                    id="daysofweek-in"
                                                    defaultValue={getStates[3]}
                                                    type="checkbox"
                                                    checked={Wednesday}
                                                    onChange={handleWednesdayChange}
                                                >
                                                </input>
                                    Wednesday</label>
                                <label >
                                            <input 
                                                    className="Dayofweek-2block-checkbox"
                                                    id="daysofweek-in"
                                                    defaultValue={getStates[4]}
                                                    type="checkbox"
                                                    checked={Thursday}
                                                    onChange={handleThursdayChange}
                                                >
                                                </input>
                                    Thursday</label>
                                <label >
                                            <input 
                                                    className="Dayofweek-2block-checkbox"
                                                    id="daysofweek-in"
                                                    defaultValue={getStates[5]}
                                                    type="checkbox"
                                                    checked={Friday}
                                                    onChange={handleFridayChange}
                                                >
                                                </input>
                                    Friday</label>
                                <label >
                                            <input 
                                                    className="Dayofweek-2block-checkbox"
                                                    id="daysofweek-in"
                                                    defaultValue={getStates[6]}
                                                    type="checkbox"
                                                    checked={Saturday}
                                                    onChange={handleSaturdayChange}
                                                >
                                                </input>
                                    Saturday</label>
                            </div>
                        </div>

                        <div className="Dayofweek-3block">
                            <p className="Dayofweek-p">at</p>
                            <input type="time" defaultValue={getStates[7]} id="time-0" className="weekly-input" style={{marginLeft: 99+'px'}}>
                            </input>
                         </div>
                    
                    
                         

                
                </div>
        </div>
    );
};
export default Daysofweek;