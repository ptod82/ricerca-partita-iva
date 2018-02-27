import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
class Nav extends Component {


    render(){
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return(
            <div>
                <div id="sidebar" className={visibility}>
                    <a onClick={this.props.handleMouseDown}>x</a>
                    <ul>
                        <li onClick={this.props.handleMouseDown}><Link to='/'>Home</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/bilanci-e-analisi'>Bilanci e Analisi</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/dati-ufficiali'>Dati Ufficiali</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/protesti-e-pregiudizievoli'>Protesti e Pregiudizievoli</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/partecipazioni-e-cariche'>Partecipazioni e Cariche</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/rating-e-valutazioni'>Rating e Valutazioni</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/indagini-patrimoniali'>Indagini Patrimoniali</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/proprieta-immobiliari'>Proprietà Immobiliari</Link></li>
                        <li onClick={this.props.handleMouseDown}><Link to='/procedure-concorsuali'>Procedure Concorsuali</Link></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Nav;
