import { useState, useEffect, useCallback } from "react";

//日落、日出時間
const fetchSunsetTime = (locationName) => {
  let sunRise;
  let sunSet;
  let nowTime;

  const now = new Date();

  const nowDate = Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(now)
    .replace(/\//g, "-");

  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=CWB-BEFBC2DC-A35D-45D0-88E1-BD1CCC49891F&format=JSON&locationName=${locationName}&dataTime=${nowDate}`
  )
    .then((response) => response.json())
    .then((data) => {
      sunRise = new Date(
        `${nowDate} ${data.records.locations.location[0].time[0].parameter[1].parameterValue}`
      ).getTime();
      sunSet = new Date(
        `${nowDate} ${data.records.locations.location[0].time[0].parameter[5].parameterValue}`
      ).getTime();
      nowTime = new Date().getTime();
      return sunRise <= nowTime && nowTime <= sunSet ? "day" : "night";
    });
};

//風速、氣溫、濕度
const fetchCurrentWeather = (locationName) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-BEFBC2DC-A35D-45D0-88E1-BD1CCC49891F&locationName=${locationName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["WDSD", "TEMP", "HUMD"].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },
        {}
      );

      return {
        observationTime: locationData.time.obsTime,
        locationName: locationData.locationName,
        temperature: weatherElements.TEMP,
        windSpeed: weatherElements.WDSD,
        humid: weatherElements.HUMD,
      };
    });
};

//降雨機率、天氣描述
const fetchWeatherForecast = (cityName) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-BEFBC2DC-A35D-45D0-88E1-BD1CCC49891F&locationName=${cityName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["Wx", "PoP", "CI"].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {}
      );

      return {
        description: weatherElements.Wx.parameterName,
        weatherCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
      };
    });
};

const useWeatherApi = (currentLocation) => {
  const { locationName, cityName } = currentLocation;
  const [weatherElement, setWeatherElement] = useState({
    observationTime: new Date(),
    locationName: "",
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: "",
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: "",
    currentTime: "",
    isLoading: true,
  });

  const fetchingData = async () => {
    const [currentWeather, weatherForecast, currentTime] = await Promise.all([
      fetchCurrentWeather(locationName),
      fetchWeatherForecast(cityName),
      fetchSunsetTime(cityName),
    ]);

    setWeatherElement({
      ...currentWeather,
      ...weatherForecast,
      currentTime: currentTime,
      isLoading: false,
    });
  };
  
  const fetchData = useCallback(() => {
    setWeatherElement((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    fetchingData();
  }, [locationName, cityName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [weatherElement, fetchData];
};

export default useWeatherApi;
