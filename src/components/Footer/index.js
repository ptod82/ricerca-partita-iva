import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render(){
        return(
            <footer>
                <div>
                    <img src={require("../../img/iconaT.svg")} alt="Powered by Tuttovisure.it" width="35px" height="35px" className="logo-t" />
                    <span>by TuttoVisure.it - QM srl - 07432331002</span>
                    <div className="info-camere">
                        <div>Distributore Ufficiale di</div>
                        <img src={require("../../img/InfoCamere_logo.png")} alt="Distributore Ufficiale InfoCamere" width="100px" height="29px"/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
