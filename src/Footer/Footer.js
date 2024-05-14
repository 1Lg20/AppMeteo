import React from 'react'
import './Footer.css'

const Footer = () => {

	const api=()=>{
		window.open("https://openweathermap.org/current")
	}

  return (
	<div className='col-12 mt-3'>
		<div className='row Footer align-item-center justify-content-center'>
			<div className='col-md-4 col-12 mt-2 mb-2 d-flex align-items-center justify-content-md-end justify-content-center text'>Powered by</div>
			<div className='col-md-4 col-12 mt-2 mb-2 d-flex align-items-center justify-content-md-start justify-content-center'><img onClick={api} className='Img-Footer' src='https://home.openweathermap.org/assets/logo_white-12c4f864cc825cfead13b43f6fdae14172bb7848529cb9f48374b9ebb0e9f061.png' alt='Open Weather Logo'/></div>
		</div>
	</div>
	
  )
}

export default Footer