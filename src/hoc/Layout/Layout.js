import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import './Layout.scss';

import Navigation from '../../components/navigation/Navigation';
import NavigationSettings from '../../components/NavigationSettings/NavigationSettings';
import NavigationProfile from '../../components/NavigationProfile/NavigationProfile';
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";

import FormUpdate from "../../components/forms/Update/Update";
import Auth from "../../components/forms/Auth/Auth";
import Logo from "../../components/Logo/Logo";

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showModal: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    auth = (e) => {
        console.log(e);
        this.setState({showModal: true});
    }

    purchaseCancelHandler = () => {
        this.setState({showModal: false});
    }

    render () {
        const formUpdate = <FormUpdate modalClosed={ () => this.purchaseCancelHandler() }/>;
        const auth = <Auth />;
        return (
            <Aux>
                <header className="Header">
                    <div className="wrapLogo">
                        <Logo />
                    </div>
                    <div className="wrapRole">
                        <h3> {!this.props.role ? 'Admin' : 'User'} </h3>  
                    </div>
                    <div className="wrapNavigation">
                        <div className="groupeNavigation">
                            <Navigation />
                        </div>   
                        <div className="groupeNavigationSettings">
                            <NavigationSettings />
                            <NavigationProfile />
                        </div>            
                    </div>
                    <div className="wrapAuth">
                        <Button disabled={false} className="" clicked={ () => this.auth('login') }> Log In </Button>
                    </div>  
                   
                </header>
                <main className="Content">
                    {this.props.children}
                </main>

                <Modal show={this.state.showModal} modalClosed={() => this.purchaseCancelHandler()}>
                    {auth}
                </Modal>

            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        role: state.auth.role
    };
};

export default connect( mapStateToProps )( Layout );