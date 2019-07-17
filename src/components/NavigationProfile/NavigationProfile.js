import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './navigationProfile.scss';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { navigationProfile } from '../../consts/navigation';

class NavigationProfile extends Component {

    componentDidMount () {
        console.log(navigationProfile);
    }

    render() {
        return (
            <div className="wrapNavigationSettings">
                {navigationProfile.map( nav => (
                    <NavLink 
                        key={nav.id}
                        to={nav.path}
                        exact={nav.exact}
                        activeClassName={classes.active}>
                        {nav.name}
                    </NavLink>
                ))}
            </div>
        );    
    }

};

const mapStateToProps = state => {
    return {
        ings: state.navigation,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( NavigationProfile, axios ));


