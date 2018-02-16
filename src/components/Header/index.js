import React, { Component } from 'react';
import Nav from './Nav'
import './header.css';
import toggleMenu from '../../img/toggle-menu.png';

class Header extends Component {

    componentDidMount() {
    }

    render(){
        return(
            <div>
            <Nav/>
            <div className="header" id="header-menu">
                <form method="GET"
                      action="/cercaAjax"
                      target="_top" id="cerca-prodotti">
                    <a id="menu">
                        <img src={toggleMenu} width="24" height="24" alt="navigation" />
                    </a>

                    <input name="q" className="ricerca-prodotti" type="text" placeholder="Cerca"/>
                        <input type="submit" value=""/>
                </form>
            </div>
            </div>
    )
    }
}

export default Header;



