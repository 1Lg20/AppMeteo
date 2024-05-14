import React,{useEffect,useState} from 'react'
import './RicercaCitta.css'
import { useNavigate } from 'react-router-dom'
import lente from './search.svg'
import Swal from 'sweetalert2'

const RicercaCitta = () => {
	const cambia=useNavigate()
	let citta=""
	const [stampa, setstampa] = useState([])
	let LocalVar="MeteoLgCitta"

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
		if (citta!=="") {
			let Passa="q="+citta
			localStorage.setItem(LocalVar,citta+","+localStorage.getItem(LocalVar))
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
		citta=dato
		manda()
	}

  return (

	<div className="container d-flex align-items-center justify-content-center">
		<div className="row justify-content-center align-items-center prova" id='add'>
			<div className='col-12 d-flex align-items-center justify-content-center titolo'>METEO LOCALE ATTUALE</div>
			<div className='col-12 d-flex align-items-center justify-content-center titolo2'>INSERISCI LA CITTÀ DA CERCARE</div>
			<div className='col-10 d-flex align-items-center justify-content-center'>
				<input type="text" className='casella' placeholder='città' onChange={(parametro)=>{citta=parametro.target.value}}/>
				<button onClick={manda} className='cerca'><img src={lente} className="lente" alt=""/></button>
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

export default RicercaCitta