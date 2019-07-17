import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './navigation.scss';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { navigation } from '../../consts/navigation';

class Navigation extends Component {

    componentDidMount () {
        console.log(navigation);
        fetch('/mock/navigation.json')
        .then(function(response) {
            console.log(response);
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="wrapNavigation">
                {navigation.map( nav => (
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Navigation, axios ));
