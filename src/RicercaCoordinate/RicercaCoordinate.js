import React,{useEffect,useState} from 'react'
import './RicercaCoordinate.css'
import { useNavigate } from 'react-router-dom'
import lente from './search.svg'
import Swal from 'sweetalert2'

const RicercaCoordinate = () => {
	const cambia=useNavigate()
	let lat=""
	let lon=""
	const [stampa, setstampa] = useState([])
	let LocalVar="MeteoLgCoord"

	useEffect(() => {
		if (localStorage.getItem(LocalVar)===null) {
			console.log("Variabile in local storage assente")
			localStorage.setItem(LocalVar,"")
			setstampa([])
		}else{
			console.log("Variabile in local storage presente")
			let cronologia=localStorage.getItem(LocalVar).split(",")
			setstampa(cronologia)
		}
	}, [])
	
	const cancella=()=>{
		console.log("Cancello la cronologia")
		localStorage.removeItem(LocalVar)
		setstampa([])
	}
	
	const manda=()=>{
		console.log("Invio...")
		if (lat!=="" && lon!=="") {
			let Passa="lat="+lat+"&lon="+lon
			localStorage.setItem(LocalVar,lat+"|"+lon+","+localStorage.getItem(LocalVar))
			cambia("/Meteo/"+Passa)
		} else {
			Swal.fire({
				icon: "error",
				title: "IMPOSSIBILE CERCARE",
				text: "Controlla di aver completato tutti i caampi",
			});
		}
		
	}

	const pulsante=(dato)=>{
		let tmp=dato.split("|")
		lat=tmp[0]
		lon=tmp[1]
		manda()
	}

  return (

	<div className="container d-flex align-items-center justify-content-center">
		<div className="row justify-content-center align-items-center prova" id='add'>
			<div className='col-12 d-flex align-items-center justify-content-center titolo'>METEO LOCALE ATTUALE</div>
			<div className='col-12 d-flex align-items-center justify-content-center titolo2'>INSERISCI LE COORDINATE DA CERCARE</div>
			<div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
				<input type="text" className='casella2' placeholder='latitudine' onChange={(parametro)=>{lat=parametro.target.value}}/>
	 		</div>
			<div className='col-12 col-md-6 mt-2 mt-md-0 d-flex align-items-center justify-content-center'>
				<input type="text" className='casella2' placeholder='longitudine' onChange={(parametro)=>{lon=parametro.target.value}}/>
	 		</div>
			<div className='col-10 mt-2 d-flex align-items-center justify-content-center'>
				<button onClick={manda} className='cerca2'>CERCA<img src={lente} className="lente" alt=""/></button>
			</div>
			<div className='col-10 mt-2 d-flex align-items-center justify-content-center'>
				<button onClick={()=>{cambia("/")}} className='home'>HOME</button>
			</div>
			<div className='col-12 mt-3 d-flex align-items-center justify-content-center'>
				<button className='cancella' onClick={cancella}>CANCELLA CRONOLOGIA RICERCHE</button>
			</div>
			<div className='col-12 d-flex align-items-center justify-content-center mt-1'>
				{stampa.map((elemento,indice)=>{
					if (elemento!=="" && elemento!=="undefined" && elemento!=="null") {
						return <button className='CrItem CrItemb' onClick={()=>{pulsante(elemento)}} key={indice}>{elemento}</button>
					}else{
						return ""
					}
					
				})}
			</div>
		</div>
	</div>
  )
}

export default RicercaCoordinate