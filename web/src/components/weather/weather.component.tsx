import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./weather.styles.scss";

const Weather = (): JSX.Element => {
    return (
        <div className="weather-widget">
           <CustomButton onClick={() => console.log}>
              GET WEATHER
          </CustomButton>
        </div>
    )
}

export default Weather;