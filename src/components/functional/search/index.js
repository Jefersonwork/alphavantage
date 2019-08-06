import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FinancesActions from "../../../store/actions";

import { Form, InputText, Button } from "../../styled/form";
import img from "../../../img/search.png";

const Search = ({ changeSymbol, getQuote, modules }) => (
  <Form>
    <InputText onChange={event => changeSymbol(event)} placeholder="Buscar por símbulo"/>
    <Button onClick={
      () => {
        console.log(typeof(modules))
        if(typeof(modules) === "string") {
          getQuote(modules)
        } else {
          alert("O campo símbolo não pode ser vázio")
          return;
        }
      }}>
      <img src={img} alt="buscar"/>
    </Button>
  </Form>
)

const mapStateToProps = state => ({
  modules: state.Reducers.symbol
})

const mapDispatchToProps = dispatch => bindActionCreators(FinancesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);