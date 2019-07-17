import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class FormUpdate extends Component {
    render () {
        return (
            <Aux>
                <h3>FormUpdate</h3>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.modalClosed}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.modalClosed}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default FormUpdate;