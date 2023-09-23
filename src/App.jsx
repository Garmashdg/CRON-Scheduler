
import React, { useState } from "react";
import Weeklycomp from "./comps/Weeklycomp";
import Daysofweek from "./comps/Daysofweek";
import EveryDay from "./comps/EveryDay";
import EveryMonth from "./comps/EveryMonth";




function App() {
    //Notification incorrect data
    function openmenu()
{
            var el=document.getElementsByClassName("Notification")[0];
            document.getElementsByClassName('Notification')[0].style.top = "15px"
            document.getElementsByClassName('Notification')[0].style.opacity = "1"
        setTimeout(()=>{
            document.getElementsByClassName('Notification')[0].style.top = "-100px"
            document.getElementsByClassName('Notification')[0].style.opacity = "0"

            




        },3000);

}


    //Decode vars
    
    const[weekminutes,setweekminutes]=useState("10")
    //
    const[DaysStates,setDaysStates]=useState([true,false,false,false,false,false,false,"12:00"])
    //
    const[xyTimeStates,setxyTimeStates]=useState(["12:00","12:00"])
    //
    const[EveryMonthSate,SetEveryMonthSate]=useState(["15","12:00"])
    //



    ///Decode cron string to schedule
    function CRONdecode(CronSring)
    {
                    
                    function restoreCronTimeTohtml(hours,minutes)
                    {
                        var timestr="";
                        if (hours.length==1)
                        {
                            timestr=timestr+'0'+hours;
                            
                        }
                        else
                        {
                        
                            timestr=timestr+hours;
                            
                        }

                        timestr=timestr+':';

                        if (minutes.length==1)
                        {
                            
                            timestr=timestr+'0'+minutes;
                        }
                        else
                        {
                            
                            timestr=timestr+minutes;
                        }

                        
                        return timestr;

                    }
                    //
                    var CronEls= CronSring.split(' ');
                    //checking CRON part on correct data
                    function checkElement(el)
                    {
                        if(!isNaN(el)==true)
                        {
                            return true
                        }
                        else if(el.indexOf(','>-1))
                        {
                            var nums=el.split(',');
                            if (nums.length>2)
                            {
                                return false
                            }

                            if(!isNaN(nums[0])==true&&!isNaN(nums[1])==true)
                            {
                                return true
                            }
                            else{
                                return false
                            }
                        }
                        else return false
                    }
                    //*********************************************** */


                    //Checking CRON input on fitting schedule

                    //CRON type Weekly
                    if(CronSring[0]=='*'&& CronSring[1]=='/'&& CronSring[CronSring.length-1]=='*'&& CronSring[CronSring.length-3]=='*'&& CronSring[CronSring.length-5]=='*'&& CronSring[CronSring.length-7]=='*')
                    {
                        console.log("Weekly");
                        setCRONtype("Weekly");
                        var separetedel=CronEls[0].split('/');
                        setweekminutes(separetedel[1]);
                        

                    }

                    //Cron type Days of week

                    
                    else if(!isNaN(CronEls[0])==true&&
                    !isNaN(CronEls[1])==true&&
                    CronEls[2]=='*'&&
                    CronEls[3]=='*'&&
                    CronEls[4]!='*')
                    {
                        console.log("Days of week")
                        setCRONtype("Daily");

                        var dayEls=CronEls[4].split(',');
                        var decodearr=[false,false,false,false,false,false,false,"12:00"]
                        for(var a=0;a<dayEls.length;a++)
                        {
                            decodearr[dayEls[a]]=true;
                        }

                        
                        var timestr=restoreCronTimeTohtml(CronEls[1],CronEls[0]);
                    
                        decodearr[decodearr.length-1]=timestr;
                        setDaysStates(decodearr);


                    }


                    //Cron type Every day at X,Y time
                    

                    
                    else if(
                        CronEls[2]=='*'&&
                        CronEls[3]=='*'&&
                        CronEls[4]=='*'&&
                        checkElement(CronEls[0])==true&&
                        checkElement(CronEls[1])==true
                        




                        
                    )


                    {
                        console.log("Every day at X,Y time")
                        setCRONtype("EveryDay");


                        var hours=CronEls[1];
                        var elhours=[];
                        var minutes=CronEls[0];
                        var elminutes=[];

                        if(hours.length>2)
                        {
                            elhours=hours.split(',');
                        }
                        else
                        {
                            elhours.push(hours);
                        }

                        if(minutes.length>2)
                        {
                            elminutes=minutes.split(',');
                        }
                        else
                        {
                            elminutes.push(minutes);
                        }
                        var time1
                        var time2

                        //reading cron
                        if(elhours.length>1)
                        {
                            if(elminutes.length>1)
                            {
                                time1=restoreCronTimeTohtml(elhours[0],elminutes[0])
                                time2=restoreCronTimeTohtml(elhours[1],elminutes[1])

                            }
                            else
                            {
                                time1=restoreCronTimeTohtml(elhours[0],elminutes[0])
                                time2=restoreCronTimeTohtml(elhours[1],elminutes[0])

                            }


                        }
                        else
                        {
                            if(elminutes.length>1)
                            {
                                time1=restoreCronTimeTohtml(elhours[0],elminutes[0])
                                time2=restoreCronTimeTohtml(elhours[0],elminutes[1])

                            }
                            else
                            {
                                time1=restoreCronTimeTohtml(elhours[0],elminutes[0])
                                time2=restoreCronTimeTohtml(elhours[0],elminutes[0])

                            }


                        }
                        var timesarr=[time1,time2];







                        

                        setxyTimeStates(timesarr);
                    }
                    //Cron type Every Month
                    else if(
                        !isNaN(CronEls[0])==true&&
                        !isNaN(CronEls[1])==true&&
                        !isNaN(CronEls[2])==true&&
                        CronEls[3]=='*'&&
                        CronEls[4]=='*'

                    )
                    {
                        console.log("Every X day of month at Y time")
                        var time=restoreCronTimeTohtml(CronEls[1],CronEls[0])

                        var infoArr=[CronEls[2],time]
                        SetEveryMonthSate(infoArr)


                        setCRONtype("EveryMonth");
                        
                    }

                    else{
                        console.log("Incorrect CRON")
                        openmenu();
                    }



    }
    //End of Decoding


    //make time like:("12:00"=>["12","0"])
    function timeFormat(time)
    {
        var hours="";
        var minutes="";
        var arr=[];
        
        if(time[0]==0)
        {
            hours=time[1];
        }
        else
        {
            hours=time[0]+time[1];

        }


        if(time[3]==0)
        {
            minutes=time[4];
        }
        else
        {
            minutes=time[3]+time[4];

        }

        arr.push(hours,minutes);
        
        return arr;
        
    }
    //



    //callback from shedule component
    var days=[]
    const handleDayChande= (name)=>
    {
        days=name
    }
//*************** */

//Load button listener
    function Load()
    {
        CRONdecode(CRONstr);
    }

    //Function formatting Schedule Html page => CRON string
    function Save()
    {

        //if first type of shedule
        if(CRONtype=="Weekly")
        {
         var el=document.getElementById("daily-in");

         var val=el.value
         if (el.value>59)
         {
            val=59
         }
         setCRONstr("*/"+val+" * * * *");
         
        }
        //if second type of shedule
        if(CRONtype=="Daily")
        {
            

           var dayscron=""
           var minutescron=""
           var hourscron=""

            for( var a=0;a<days.length;a++)
            {
                if(days[a]==true)
                {
                    dayscron+=a+','

                    var el=document.getElementById("time-0");
                    var arrTime=timeFormat(el.value);

                    minutescron=arrTime[1];
                    hourscron=arrTime[0];


                }

            }

            dayscron = dayscron.substring(0, dayscron.length - 1);
            setCRONstr( minutescron+" "+hourscron+" "+"* * "+dayscron);
            
         
        }
        //if third type of shedule
        if(CRONtype=="EveryDay")
        {
             var el1=document.getElementById("timeevery-0");
             var el2=document.getElementById("timeevery-1");
             
             var time1=timeFormat(el1.value[0]+el1.value[1]+el1.value[2]+el1.value[3]+el1.value[4]);
             var time2=timeFormat(el2.value[0]+el2.value[1]+el2.value[2]+el2.value[3]+el2.value[4]);

             var mins="";
             var hours="";

             var CRONdone="";
            //Hours to CRON
             if(time1[0]==time2[0]){
                hours=time1[0]
             }
             else{
                
                hours=time1[0]+','+time2[0]
             }

             //Minutes to CRON
             if(time1[1]==time2[1]){
                mins=time1[1]
             }
             else{
                
                mins=time1[1]+','+time2[1]
             }

            CRONdone=mins+" "+hours+" * * *";
             setCRONstr(CRONdone);

        }
        //if fourth type of shedule
        if(CRONtype=="EveryMonth")
        {
            var elmonthday=document.getElementById("month-day");
            var elmonthtime=document.getElementById("month-day-time");

            var timeCron=timeFormat(elmonthtime.value[0]+elmonthtime.value[1]+elmonthtime.value[2]+elmonthtime.value[3]+elmonthtime.value[4]);

            var CRONdone=timeCron[1]+" "+timeCron[0]+" "+elmonthday.value+" * *";

            
            setCRONstr(CRONdone);


        }


    }

    ///Conditonal rendering schedule pages
const Diferrentrender=({val})=>{
    if (val=="Weekly")
    {
        return <Weeklycomp minutes={weekminutes}></Weeklycomp>
    }
    if(val=="Daily")
    {
        console.log("Main-"+DaysStates)
        return <Daysofweek onChange={handleDayChande} getStates={DaysStates}></Daysofweek>
    }
    if(val=="EveryDay")
    {
        return <EveryDay times={xyTimeStates} ></EveryDay>
    }
    if(val=="EveryMonth")
    {
        var newarr=[EveryMonthSate[0],EveryMonthSate[1]]
        return <EveryMonth getInfo={newarr}></EveryMonth>
    }

}
    //use some hooks
const [CRONtype,setCRONtype]=useState("Weekly");
const [CRONstr,setCRONstr]=useState("* * * * *");



    //html
  return (
    <div className="App">
        <div className="Notification"><p>Incorrect CRON data</p></div>
        

            <div className="table">
                <h1 className="text-h1">Schedule</h1>
                    <div className="table-radio">
                                <div >
                                    <label className="table-el">
                                            <input
                                            type="radio"
                                            name="Weekly"
                                            checked={CRONtype === "Weekly"}
                                        onChange={event=> setCRONtype(event.target.name)}
                                            className="real-radio"
                                            >

                                            </input>
                                            <span className="costom-radio"></span>
                                            <p>Every X minutes</p>
                                    </label>
                                </div>

                                <div >
                                  <label className="table-el">  
                                    <input
                                    type="radio"
                                    name="Daily"
                                    checked={CRONtype === "Daily"}
                                    onChange={event=> setCRONtype(event.target.name)}
                                    className="real-radio"

                                    >
                                    </input>
                                    <span className="costom-radio"></span>
                                    <p>Days of week at X time</p>
                                 </label>   
                                </div>


                                <div >
                                   <label className="table-el"> 
                                        <input
                                        type="radio"
                                        name="EveryDay"
                                        checked={CRONtype === "EveryDay"}
                                        onChange={event=> setCRONtype(event.target.name)}
                                        className="real-radio"

                                        >
                                        </input>
                                        <span className="costom-radio"></span>
                                        <p>Every day at X,Y time</p>
                                    </label>
                                </div>


                                <div >
                                   <label className="table-el"> 
                                            <input
                                            type="radio"
                                            name="EveryMonth"
                                            checked={CRONtype === "EveryMonth"}
                                            onChange={event=> setCRONtype(event.target.name)}
                                            className="real-radio"

                                            >
                                            </input>
                                            <span className="costom-radio"></span>
                                            <p>Every X day of month at Y time</p>
                                    </label>        
                                </div>

                                    
                    </div>   

                    <div className="table-info">
                        <Diferrentrender val={CRONtype}></Diferrentrender>

                    </div>
            </div>
            <div className="Buttons">
                <button onClick={Load} className="button_">Load</button>
                <button onClick={Save} className="button_">Save</button>

            </div>

            <div className="CRON-output">

                <input
                type="text"
                placeholder="CRON"
                value={CRONstr}
                onChange={event=>setCRONstr(event.target.value)}
                className="weekly-input"
                
                ></input>
            </div>
    </div>
    
  );
}



export default App;
