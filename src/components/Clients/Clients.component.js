import React, { Component } from 'react';

import './clients.scss';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import ClientsTable from '../tables/Clients/ClientsTable';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Clients extends Component {

    inputChangedHandler (e, term) {
        console.log(e.target.value, term);
    }

    render () {
        const clientsTable = <ClientsTable />;

        return (
            <div className="pageClients">
                <div className="wrapPageClients">
                    <div className="pageClientsTable">
                        <div className="wTabeHeader">
                            <h4>Clients</h4>
                            <div>
                                icon searh
                                <Button className=""> Add New User </Button>
                            </div>
                        </div>
                        {clientsTable}
                    </div>
                    <div className="wrapProfileInfo">
                        <div className="profileClientInfo">
                            <div className="wTabeHeader">
                                <h4>Cengage Learning </h4>
                                <div>
                                    <Button className=""> Remove Access </Button>
                                    <Button className=""> Update User </Button>
                                    <Button className=""> Reset Password </Button>
                                </div>
                            </div>
                            <form className="informationClient">
                                <div className="wrapInformationClientField">
                                    <h4>Client Details</h4>
                                </div>
                                <div className="wrapInformationClientField">
                                    <label className="labelInput" htmlFor="size_1">Date Created:</label>
                                    <input type="text" name="size" id="size_1" value="small" onChange={(event) => this.inputChangedHandler(event, 'size_1')} />
                                    {/* <Input 
                                            key={'size_1'}
                                            elementType={'text'}
                                            elementConfig={''}
                                            value={'small'}
                                            invalid={true}
                                            shouldValidate={''}
                                            touched={'true'}
                                            changed={(event) => this.inputChangedHandler(event, 'size_1')} /> */}
                                </div>
                                <div className="wrapInformationClientField">
                                    <label className="labelInput" htmlFor="size_2">Last Access:</label>
                                    <input type="text" name="size" id="size_2" value="medium" onChange={(event) => this.inputChangedHandler(event, 'size_2')}/>
                                </div>
                                <div className="wrapInformationClientField">
                                    <label className="labelInput" htmlFor="size_3"><strong> Amount of Download  </strong> </label>
                                </div>                
                                <div className="wrapInformationClientField">
                                    <label className="labelInput" htmlFor="size_4">Past Week</label>
                                    <input className="" type="text" name="size" id="size_4" value="large" onChange={(event) => this.inputChangedHandler(event, 'size_4')}/>
                                </div>  
                                <div className="wrapInformationClientField">
                                    <label className="labelInput" htmlFor="size_5">All Time:</label>
                                    <input type="text" name="size" id="size_5" value="large" onChange={(event) => this.inputChangedHandler(event, 'size_5')}/>
                                </div>           
                            </form>
                        </div>
                        <div className="profileCompanyInfo">
                                <div className="companyInfoField">
                                    <div className="companyInfoFieldLeft">
                                        Company Access
                                    </div>
                                    <div className="companyInfoFieldRight">
                                        <Button className=""> Add Company </Button>
                                    </div>
                                </div>

                                <div className="companyInfoField">
                                    <div className="companyInfoFieldLeft">
                                        <div className="infoField">Daimler:</div>
                                        <span className="infoFieldDescription"> Last Updat: Nov18, 2018</span>
                                    </div>
                                    <div className="companyInfoFieldRight">
                                        <div className="publisher"> <span>Published</span> </div>
                                        <div className="centered">
                                            <Button className=""> Remove </Button>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="companyInfoField">
                                    <div className="companyInfoFieldLeft">
                                        <div className="infoField">Daimler:</div>
                                        <span className="infoFieldDescription"> Last Updat: Nov18, 2018</span>
                                    </div>
                                    <div className="companyInfoFieldRight">
                                        <div className="publisher"> <span>Published</span> </div>
                                        <div className="centered">
                                            <Button className=""> Remove </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="companyInfoField">
                                    <div className="companyInfoFieldLeft">
                                        <div className="infoField">Kroger:</div>
                                        <span className="infoFieldDescription"> Last Updat: Nov18, 2018</span>
                                    </div>
                                    <div className="companyInfoFieldRight">
                                        <div className="publisher"> <span>Published</span> </div>
                                        <div className="centered">
                                            <Button className=""> Remove </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="companyInfoField">
                                    <div className="companyInfoFieldLeft">
                                        <div className="infoField">Exxon Mobil:</div>
                                        <span className="infoFieldDescription"> Last Updat: Nov18, 2018</span>
                                    </div>
                                    <div className="companyInfoFieldRight">
                                        <div className="publisher"> <span>Published</span> </div>
                                        <div className="centered">
                                            <Button className=""> Remove </Button>
                                        </div>
                                    </div>
                                </div>
       
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Clients, axios ));