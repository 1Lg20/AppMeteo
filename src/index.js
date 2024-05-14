import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Meteo from './Meteo';
import RicercaCitta from './RicercaCitta/RicercaCitta';
import RicercaCoordinate from './RicercaCoordinate/RicercaCoordinate';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	< BrowserRouter>
		< Routes>
		< Route path='/' element={< App />} />
		< Route path='/Meteo/:cerca' element={< Meteo />} />
		< Route path='/CercaCitta' element={< RicercaCitta/>} />
		< Route path='/CercaCoordinate' element={< RicercaCoordinate/>} />
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
