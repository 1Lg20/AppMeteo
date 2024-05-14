import React,{useState, useEffect} from 'react'
import Footer from './Footer/Footer'
import Display from './Display/Display'
import TopBar from './TopBar/TopBar'
// eslint-disable-next-line
import {linkp1,linkp2,linkProva} from './Dati'
import { useParams } from 'react-router-dom'

const Meteo = () => {

	const [json, setjson] = useState({name:"Città non trovata",coord:{lat:"No Data", lot:"No Data"},weather:[{description:"No Data",icon:"No Data"}],main:{temp:"No Data",feels_like:"No Data",temp_max:"No Data",temp_min:"No Data",humidity:"No Data"},wind:{speed:"No Data"}})

	const {cerca}=useParams()

	useEffect(() => {
		console.log(cerca)
		previsioni()
	}, [])
	
	const previsioni=()=>{	
		fetch(linkp1+cerca+linkp2)
		.then(dati=>dati.json())
		.then(dati=>{
			if (dati.cod===200) {
				setjson(dati)
			} else {
				console.log("Errore nella fetch")
			}
					
		})
		
	}

  return (
	<div className='container'>
		<div className='row align-items-center justify-content-center'>
			<TopBar></TopBar>
			<Display Meteo={json}></Display>
			<Footer></Footer>
		</div>
		
	</div>
  )
}

export default Meteo