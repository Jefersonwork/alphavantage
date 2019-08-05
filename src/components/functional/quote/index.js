import React from "react";

import { connect } from "react-redux";

import { CardHeader } from "../../styled/content"
import { H2, Label, Span } from "../../styled/text";

const Quote = ({quote}) => {

  if (quote["Global Quote"] !=  undefined) {
    console.log(quote["Global Quote"]);    
    let data = {
      symbol: quote["Global Quote"]["01. symbol"],
      price: quote["Global Quote"]["05. price"],
      change: quote["Global Quote"]["09. change"],
      changePercent: quote["Global Quote"]["10. change percent"]
    }
    return (
      <CardHeader>
        <H2>{data.symbol}</H2>
        <div>
          <Label>
            {parseFloat(data.price).toFixed(2)}
          </Label>
          <Span color={data.change<0?"red":"green"}>
            {parseFloat(data.change).toFixed(2)} ({parseFloat(data.changePercent).toFixed(2)})
          </Span>
        </div>
      </CardHeader>
    )
  }

  return(<div></div>);
}

export default connect(state => ({
  quote: state.Reducers.quote
}))(Quote);