import React, { Component } from 'react';
import Nav from './Nav'
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }


    render(){
        return(
            <div>
            <Nav handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            <div className="header" id="header-menu">
                <form method="GET"
                      action="/cercaAjax"
                      target="_top" id="cerca-prodotti">
                    <a id="menu" onClick={this.handleMouseDown}>
                        <img src={require('../../img/toggle-menu.png')} alt="navigation" width="24px" height="24px" />
                    </a>

                    <input name="q" className="ricerca-prodotti" type="text" placeholder="Cerca"/>
                    <a id="logo" href="/"></a>
                    <input type="submit" value=""/>
                </form>
            </div>
            { this.state.visible ?
                <div id="overlay" onClick={this.handleMouseDown}></div>
                : null
            }
            </div>
    )
    }
}

export default Header;



