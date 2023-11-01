import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

import Loader from '../components/Loader';
import { errorToast } from '../services/toast.service';


const Weather = () => {

      const [city, setCity] = useState('');
      const [weatherData, setWeatherData] = useState({});

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9ff3866c74ab800ceb7d0d11da7851ab`;



      const searchCity = (event) => {
            if (event.key === 'Enter') {
                  axios.get(url).then((response) => {
                        setWeatherData(response.data)
                  })
                  setCity('')
            }

      }




      return (

            <>
                  <div className='container-weather'>
                        <div className=' container2 text-center w-100 h-100 m-auto p-5 text-white d-flex flex-column gap-5'>


                              <Form.Control
                                    type="text"
                                    onKeyPress={searchCity}
                                    className="rounded-pill m-auto bg-transparent text-white"
                                    style={{ width: "40%" }}
                                    placeholder='Enter Location'
                                    value={city}
                                    onChange={event => setCity(event.target.value)}
                              />

                              <div className="body h-25">
                                    <div className="temp">
                                          {weatherData.main ? <h1 className='me-0'>{weatherData.main.temp.toFixed()}°F</h1> : null}
                                    </div>
                                    <div className="name">
                                          {weatherData.weather ? <h2 className=' text-warning'>{weatherData.name}</h2> : null}
                                    </div>
                                    <div className="desp">
                                          {weatherData.weather ? <h5>{weatherData.weather[0].main}</h5> : null}
                                    </div>
                              </div>



                              <Card className=' bottom w-50 m-auto rounded-2 text-white d-flex flex-row justify-content-around'>
                                    <div>
                                          {weatherData.main ? <h3>{weatherData.main.feels_like.toFixed()}°F</h3> : null}
                                          <p>Feels Like</p>
                                    </div>
                                    <div>
                                          {weatherData.main ? <h3>{weatherData.main.humidity}%</h3> : null}
                                          <p>Humidity</p>
                                    </div>
                                    <div>
                                          {weatherData.wind ? <h3>{weatherData.wind.speed}mph</h3> : null}
                                          <p>Wind Speed</p>
                                    </div>
                              </Card>




                        </div>
                  </div>
            </>
      )
}


export default Weather