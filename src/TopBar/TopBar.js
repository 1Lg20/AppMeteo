import React from 'react'
import './TopBar.css'
import image from './../GitHub.png'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {

	const gira=useNavigate()

	const cambia=()=>{
		gira(-1)
	}

	const github=()=>{
		window.open("https://github.com/1Lg20")
	}

	return (
		<div className='col-12 mb-3 NavBar'>
			<div className='row'>
				<div className='col-4 d-flex align-items-center justify-content-start'><button onClick={cambia} className='element-header button-header'>TORNA A RICERCA</button></div>
				<div className='col-4 d-flex align-items-center justify-content-center testo'>METEO LOCALE ATTUALE</div>
				<div className='col-4 d-flex align-items-center justify-content-end'><img onClick={github} className='element-header' src={image} alt='GitHub'/></div>
			</div>
		</div>
	)
}

export default TopBar