import React from "react";

import { connect } from "react-redux";

import { CardHeader } from "../../styled/content"
import { H2, Label, Span } from "../../styled/text";

const Quote = ({quote}) => {

  if (quote["Global Quote"] !==  undefined) {
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

  return(
    <CardHeader>
      <H2>AAPL</H2>
      <div>
        <Label>
          204.02
        </Label>
        <Span color="red">
          -4.41 (-2.12%)
        </Span>
      </div>
    </CardHeader>
  );
}

export default connect(state => ({
  quote: state.Reducers.quote
}))(Quote);