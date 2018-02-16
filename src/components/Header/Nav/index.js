import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
class Nav extends Component {
    render(){
        return(
            <div id="sidebar">
                <ul>
                    <li><Link to='/'>Home</Link></li>
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
        )
    }
}

export default Nav;
