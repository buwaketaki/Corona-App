import React from "react";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api/index";

const App = () => {
  const [info, setinfo] = useState({
    data: null,
  country:""
  });
 
  const[country,setCountry]=useState("")
 
  const handleCountryChange = async (getCountry) => {
    const getData = await fetchData(getCountry);
    console.log(getData);
    setinfo(getData, getCountry);
    setCountry(getCountry)
    console.log('info')
    console.log(info)
    console.log(getCountry)
    console.log(getData);
  };


  useEffect(() => {
    
    const func = async () => {
      const getData = await fetchData();
      console.log(getData);
      setinfo(getData)}
      func()
  }, []);

  return (
    <React.Fragment>
      {info === null ? (
        <div>Loading</div>
      ) : (
        <div className={styles.container}>
          
        <img className={styles.image} src={"https://github.com/adrianhajdin/project_corona_tracker/blob/master/src/images/image.png?raw=true"} alt="COVID-19" />
          <Cards data={info} />
          <CountryPicker handleCountryChange={handleCountryChange}  styles="margin-top:30px; margin-bottom: 30px" />
        <Chart data={info} country={country} /> 
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
