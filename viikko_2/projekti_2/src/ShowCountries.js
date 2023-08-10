import { useState } from 'react';
import axios from "axios"

const ShowCountries = ({results, filter, buttonFunc}) => {

    const API_KEY = process.env.REACT_APP_API_KEY       //Open weather käytetty API-AVAIN.
    const filteredCountries = []                        //Lista joka sisältää filtteröidyt maat.
    const MIINUS = 273.15                               //Arvo jota käytetään kelvinien muuttamiseen celsiuksiksi.

    const [wind, setWind] = useState('unknown')         //Yksittäisen maan tuuli.
    const [temp, setTemp] = useState('unknown')         //Yksittäisen maan lämpötila.
    const [icon, setIcon] = useState('50d')             //Säätä kuvaava png kuvan nimi.

    /**
     * Funktio laittaa kaikki filtterin ehdot toteuttavat maat listalle.
     * @param {*} country 
     */
    const filterResults = (country) => {
        const c_name = country.name.common.toLowerCase()
        if(c_name.includes(filter.toLowerCase())) {
            filteredCountries.push(country)
        }
    }

    /**
     * Funktio palauttaa ilmoituksen liian monista löydetyistä maista. 
     */
    const returnEmpty = () => {
        return (
            <div key="emptyKey">
                <label>Too many matches, specifyi another filter</label>
            </div>  
        )
    }

    /**
     * Funktio palauttaa muuttujan, jonka sisällä on lista div elementtejä, jotka sisältävät kaikki halutut maatiedot.
     */
    const returnResults = () => {
        const lines = filteredCountries.map(fc => 
            <div key={"resultsKey"+fc.name.common}>
                <label>
                    {fc.name.common} <button id={fc.name.common + "B"} onClick={buttonFunc}>show</button>
                </label>
                {countryInfo(fc)}
            </div>
        )
        return lines
    }

    /**
     * Funktio palauttaa div elementin jonka sisällä on maan perustiedot.
     * @param {Object} fc - Filtered country object.
     * @returns html element.
     */
    const countryInfo = (fc) => {
        return (
            <div key={fc.name.common + "key"} id={fc.name.common + "Info"} style={{display: 'none'}}>
                <h2>{fc.name.common}</h2>
                <div>
                    <label>capital {fc.capital}</label>
                    <br/>
                    <label>area {fc.area}</label>
                    <br/>
                </div>
                <div>
                    <br/>
                    <strong>languages: </strong>
                    <Languages lan={fc.languages}/>
                </div>
                <div>
                    <br/>
                    <img src={fc.flags.png} alt="icons" />
                </div>
            </div>
        )
    }

    /**
     * Funktio tekee api kutsun open weather map orgille ja pyytää sen pääkaupungin tiedot.
     * @param {String} city     - Käsiteltävä pääkaupunki. 
     */
    const makeWeatherCall = (city) => {
        const vipu = true
        if(vipu) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => {
                setWind(Number(response.data.wind.speed).toFixed(2))
                setTemp(Number(response.data.main.temp - MIINUS).toFixed(2))
                setIcon(response.data.weather[0].icon)
            })
            .catch(error => {
                console.error(error);
            }
        );
        }
    }

    /**
     * Funktio palauttaa div elementin jonka sisällä on X maan pääkaupungin lämpötila, tuuli ja säätä kuvaava kuva.
     * @param {String} city - Käsiteltävä kaupunki. 
     * @returns 
     */
    const weatherInfo = (city) => {
        makeWeatherCall(city)
        return (
            <div key={city + "WeatherKey"}>
                <h2>Weather in {city}</h2>
                <label>tempature {temp} Celcius</label>
                <br />
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Depicts the weather in the selected countrys capital"></img>
                <br />
                <label>wind {wind} m/s</label>
            </div>
        )
    }

    /**
     * Funktio palauttaa html elementin joka pitää sisällään kaikki maan X tiedot.
     * @returns 
     */
    const returnSingle = () => {
        const country = filteredCountries[0]
        console.log('SINKKU: ', country)
        return (
            <div key={"single" + country.name.common}>
                <h2>{country.name.common}</h2>
                <div>
                    <label>capital {country.capital}</label>
                    <br/>
                    <label>area {country.area}</label>
                    <br/>
                </div>
                <div>
                    <br/>
                    <strong>languages: </strong>
                    <Languages lan={country.languages}/>
                </div>
                <div>
                    <br/>
                    <img src={country.flags.png} alt="icons" />
                </div>
                <div>
                    <h2>Weather</h2>
                    {weatherInfo(country.capital[0])}
                </div>
            </div>
        )
    }

    if(results !== null) {
        if(filter === '') 
        {
            return returnEmpty()
        }
        else 
        {
            results.forEach(country => filterResults(country));
            if(filteredCountries.length === 1) 
            {
                return returnSingle()
            } 
            else if(filteredCountries.length <= 10) 
            {
                return returnResults()
            }
            else 
            {
                return returnEmpty()
            }
        }
    }
}

/**
 * Funktio tekee listan kaikista maassa puhuttavista kielistä.
 * @param {Object} lan  - olio. 
 * @returns ul -> li 
 */
const Languages = ({lan}) => {
    const temp = Object.values(lan)
    const items = temp.map((l) =>  <li key={l}>{l}</li>);
    return (
        <ul> 
            {items}
        </ul>
    )
}

export default ShowCountries