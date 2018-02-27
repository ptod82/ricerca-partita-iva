import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css'

class Home extends Component {
    render(){
        return(
            <div>
                <div className="hero-page">
                   <div className="searchHome">

                   </div>
                </div>
                <div className="home-cnt">
                    <div>
                        <h1>Ricerca Partita Iva</h1>
                        <p>Informazioni a portata di click <br />su più di 6.000.000 di imprese italiane.</p>
                    </div>
                </div>
                <div className="home-links">
                    <ul>
                        <li><Link to='/bilanci-e-analisi'>Bilanci e Analisi</Link></li>
                        <li><Link to='/dati-ufficiali'>Dati Ufficiali</Link></li>
                        <li><Link to='/protesti-e-pregiudizievoli'>Protesti e Pregiudizievoli</Link></li>
                        <li><Link to='/partecipazioni-e-cariche'>Partecipazioni e Cariche</Link></li>
                        <li><Link to='/rating-e-valutazioni'>Rating e Valutazioni</Link></li>
                        <li><Link to='/indagini-patrimoniali'>Indagini Patrimoniali</Link></li>
                        <li><Link to='/proprieta-immobiliari'>Proprietà Immobiliari</Link></li>
                        <li><Link to='/procedure-concorsuali'>Procedure Concorsuali</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;
