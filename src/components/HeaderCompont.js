import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../App.css'


class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                    <div className="container" id="jumbo" >
                        <div className='row row-header'  id="jumbo">
                            <div className='col-12 col-sm-6  text-md-left' id="headerText">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }

}

export default Header;

