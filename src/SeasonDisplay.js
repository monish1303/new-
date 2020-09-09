import React from "react";
import './SeasonDisplay.css'
//refractor summer and winter 
const seasonConfig = {
    summer:{
        text: 'Lets hit the beach !',
        iconName:'sun'
    },
    winter:{
        text: 'Burr it is cold',
        iconName:'snowflake'
    }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //ternary operator truthy and falsely
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  //console.log(props.lat)
  const season = getSeason(props.lat, new Date().getMonth());
  const {text,iconName} = seasonConfig[season];
//   const text = season === "winter" ? "Burr ,it is chilly" : "hot it is sunny"
//   const icon = season === 'winter' ? 'snowflake ' : 'sun';
//insted of this seasonconfig {text,iconName}


  return (
    <div className={`season-display ${season}`}>
        {/* es2015 ` ` */}
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
       {/* {season === "winter"? "burr is s" : "ssssss"} */}
    </div>
    // console.log(season)
    // return(
    //     <div>
    //         Season Display
    //     </div>
  );
};

export default SeasonDisplay;
