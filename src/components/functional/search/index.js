import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FinancesActions from "../../../store/actions";

import { Form, InputText, Button } from "../../styled/form";

const Search = ({ changeSymbol, getQuote, modules }) => (
  <Form>
    <InputText onChange={event => changeSymbol(event)}/>
    <Button onClick={() => getQuote(modules)}>Buscar</Button>
  </Form>
)

const mapStateToProps = state => ({
  modules: state.Reducers.symbol
})

const mapDispatchToProps = dispatch => bindActionCreators(FinancesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);