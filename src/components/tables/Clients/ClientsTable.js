import React, { Component } from 'react';

import './clientsTable.scss';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios-orders';

class ClientsTable extends Component {

    render () {
        return (
            <div className="pageUpdates">
              <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="number" scope="col"></th>
                            <th className="date" scope="col"></th>
                            <th className="text" scope="col"></th>
                            <th className="description" scope="col"></th>
                            <th className="status" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Capital Structure</td>
                            <td>Proposed Reforms to the Section 956 "Deemed Dividend" Rules Will Offshore Collateral and Guarantee Packages Improve?</td>
                            <td className="status "> <span>&gt;</span></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text" >Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Capital Structure</td>
                            <td>Proposed Reforms to the Section 956 "Deemed Dividend" Rules Will Offshore Collateral and Guarantee Packages Improve?</td>
                            <td className="status "> <span>&gt;</span></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span> </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span> </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span> </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span> </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span> </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className="date">Nov 05 - Nov 09, 2018</td>
                            <td className="text">Week in Review</td>
                            <td>European Week in Review</td>
                            <td className="status "> <span>&gt;</span> </td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( ClientsTable, axios ));