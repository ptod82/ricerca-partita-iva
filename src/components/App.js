import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import Bilanci from './Views/BilanciAnalisi';
import Dati from './Views/DatiUfficiali';
import Protesti from './Views/ProtestiPregiudizievoli';
import Partecipazioni from "./Views/PartecipazioniCariche";
import Rating from "./Views/RatingValutazioni";
import Indagini from "./Views/IndaginiPatrimoniali";
import Proprieta from "./Views/ProprietaImmobiliari";
import Procedure from "./Views/ProcedureConcorsuali";

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="wrap">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/bilanci-e-analisi' component={Bilanci} />
                        <Route path='/dati-ufficiali' component={Dati} />
                        <Route path='/protesti-e-pregiudizievoli' component={Protesti} />
                        <Route path='/partecipazioni-e-cariche' component={Partecipazioni} />
                        <Route path='/rating-e-valutazioni' component={Rating} />
                        <Route path='/indagini-patrimoniali' component={Indagini} />
                        <Route path='/proprieta-immobiliari' component={Proprieta} />
                        <Route path='/procedure-concorsuali' component={Procedure} />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
