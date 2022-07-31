import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import './App.css';

const App = () => {
  // let coldDisabled = false

  /* States */
  const [hotDisabled, setHotDisabled] = useState(false)
  const [coldDisabled, setColdDisabled] = useState(false)
  const [temperatureValue, setTemperatureValue] = useState(25)
  const [temperatureColor, setTemperatureColor] = useState('hot')

  /* Methods */
  const changeColor = (newTempValue) => {

    if (newTempValue >= 45) {
      setTemperatureColor('hottest')
      return
    }

    if (newTempValue >= 35) {
      setTemperatureColor('hotter')
      return
    }

    if (newTempValue > 15) {
      setTemperatureColor('hot')
      return
    }

    if (newTempValue <= -55) {
      setTemperatureColor('coldest')
      return
    }

    if (newTempValue <= -25) {
      setTemperatureColor('colder')
      return
    }

    if (newTempValue <= 15) {
      setTemperatureColor('cold')
      return
    }
  }

  const increaseTemp = () => {
    setColdDisabled(false)
    const newTempValue = temperatureValue + 1

    if (newTempValue > 56) {
      toast(
        <p>
          <b>56.7°C</b> is the highest temperature ever recored by humans! It was recored in <b>Death Valley, United States</b> on <b>10 July 1913</b>.
        </p>,
        {
          duration: 4000,
          style: {
            color: '#d00000',
            boxShadow: '10px 10px 38px 0px rgba(0, 0, 0, 0.75)'
          }
        }
      )
      setHotDisabled(true)
      return
    }

    changeColor(newTempValue)

    setTemperatureValue(newTempValue)
  }

  const decreaseTemp = () => {
    setHotDisabled(false)
    const newTempValue = temperatureValue - 1

    if (newTempValue < -89) {
      toast(
        <p>
          <b>-89.2°C</b> is the lowest temperature ever recored by humans! It was recored in Vostok, Antarctica on 21 July 1983.
        </p>,
        {
          duration: 4000,
          style: {
            color: '#00b4d8',
          }
        }
      )
      setColdDisabled(true)
      return
    }

    changeColor(newTempValue)

    setTemperatureValue(newTempValue)
  }

  const increaseTempBy10 = () => {
    setColdDisabled(false)
    const newTempValue = temperatureValue + 10

    if (newTempValue > 56) {
      toast(
        <p>
          <b>56.7°C</b> is the highest temperature ever recored by humans! It was recored in <b>Death Valley, United States</b> on <b>10 July 1913</b>.
        </p>,
        {
          duration: 4000,
          style: {
            color: '#d00000',
            boxShadow: '10px 10px 38px 0px rgba(0, 0, 0, 0.75)'
          }
        }
      )
      setHotDisabled(true)
      return
    }

    changeColor(newTempValue)

    setTemperatureValue(newTempValue)
  }

  const decreaseTempBy10 = () => {
    setHotDisabled(false)
    const newTempValue = temperatureValue - 10

    if (newTempValue < -89) {
      toast(
        <p>
          <b>-89.2°C</b> is the lowest temperature ever recored by humans! It was recored in Vostok, Antarctica on 21 July 1983.
        </p>,
        {
          duration: 4000,
          style: {
            color: '#00b4d8',
          }
        }
      )
      setColdDisabled(true)
      return
    }

    changeColor(newTempValue)

    setTemperatureValue(newTempValue)
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
        </div>
        <div className="button-container">
          <button onClick={() => { increaseTemp() }} className={hotDisabled ? "disabled" : ''} disabled={hotDisabled}>+</button>
          <button onClick={() => { decreaseTemp() }} className={coldDisabled ? "disabled" : ''} disabled={coldDisabled}>-</button>
          <button onClick={() => { increaseTempBy10() }} className={hotDisabled ? "disabled" : ''} disabled={hotDisabled}>+10</button>
          <button onClick={() => { decreaseTempBy10() }} className={coldDisabled ? "disabled" : ''} disabled={coldDisabled}>-10</button>
        </div>
      </div>
    </>
  )
}

export default App