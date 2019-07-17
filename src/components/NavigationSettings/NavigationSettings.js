import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './navigationSettings.scss';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { navigationSettings } from '../../consts/navigation';

class NavigationSettings extends Component {

    componentDidMount () {
        console.log(navigationSettings);
    }

    render() {
        return (
            <div className="wrapNavigationSettings">
                {navigationSettings.map( nav => (
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( NavigationSettings, axios ));


