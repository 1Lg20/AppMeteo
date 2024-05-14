import React,{useEffect, useRef} from 'react'
import './Display.css'
import NoData from './No-data.png'

const Display = ({Meteo}) => {

	const LinkImg = useRef()

	useEffect(() => {
		
		console.log("Display.js:",Meteo)
		if (Meteo.cod===200) {
			LinkImg.current.src="https://openweathermap.org/img/wn/"+Meteo.weather[0].icon+"@2x.png"
		} else {
			LinkImg.current.src=NoData
		}
		
				
	}, [Meteo])




  return (
	<div className='col-9'>
		<div className='row meteo'>
			<div className='col-12'>
				<div className='row'>
					<div className='col-9 d-flex align-items-center justify-content-start Name'>{Meteo.name}</div>
					<div className='col-3 d-flex align-items-center justify-content-end Pos'>Latitudine: {Meteo.coord.lat} <br/>Longitudine: {Meteo.coord.lon}</div>
				</div>
			</div>
			<div className='col-12 d-flex align-items-center justify-content-center descript'>{Meteo.weather[0].description}</div>
			<div className='col-12 d-flex align-items-center justify-content-center'><img className='MeteoImg' ref={LinkImg} alt='Meteo-img'/></div>
			<div className='col-12'>
				<div className='row'>
					<div className='col-12'>
						<div className='row '>
							<div className='col-12 d-flex align-items-center justify-content-center temp'>TEMPERATURA</div>
							<div className='col-md-3 col-6 text-center d-flex font-weight-normal align-items-center justify-content-center mis'>MISURATA:<br/>{Meteo.main.temp} °C</div>
							<div className='col-md-3 col-6 text-center d-flex align-items-center justify-content-center per'>PERCEPITA:<br/>{Meteo.main.feels_like} °C</div>
							<div className='col-md-3 col-6 text-center d-flex align-items-center justify-content-center max'>MASSIMA:<br/>{Meteo.main.temp_max} °C</div>
							<div className='col-md-3 col-6 text-center d-flex align-items-center justify-content-center min'>MINIMA:<br/>{Meteo.main.temp_min} °C</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='row'>
							<div className='col-12 d-flex text-center align-items-center justify-content-center vven'>VELOCITÀ DEL VENTO</div>
							<div className='col-12 d-flex text-center align-items-center justify-content-center vven'>{Meteo.wind.speed} Km/h</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='row'>
							<div className='col-12 d-flex text-center align-items-center justify-content-center umid'>UMIDITÀ</div>
							<div className='col-12 d-flex text-center align-items-center justify-content-center umid'>{Meteo.main.humidity} hPa</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
  )
}

export default Display