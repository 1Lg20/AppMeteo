import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import terra from './Terra.png'
import citta from './Città.png'

const App = () => {

	const cambia=useNavigate()

  return (
	<div className='container'>
		<div className='row justify-content-center align-items-center'>
			<div className='col-11 d-flex justify-content-center align-items-center titoloHome'>
				METEO LOCALE ATTUALE
			</div>
			<div className="col-11 col-lg-3 m-3">
				<button onClick={()=>{cambia("/CercaCitta")}} className='scelta'><img src={citta} alt='' className='Img'/><div className='nome'>RICERCA PER CITTA</div></button>
			</div>
			<div className="col-11 col-lg-3 m-3">
				<button onClick={()=>{cambia("/CercaCoordinate")}} className='scelta'><img src={terra} alt='' className='Img'/><div className='nome'>RICERCA PER COORDINATE</div></button>
			</div>
		</div>
	</div>
  )
}

export default App