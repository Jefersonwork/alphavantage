import styled from "styled-components";

export const H1 = styled.h1 `
  font-size: 35px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
`;

export const H2 = styled.h2`
  font-size: 35px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
`

export const Label = styled.label`
  margin: auto 5px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
`

export const Span = styled.span`
  color: ${props => props.color};
  font-family: Arial, Helvetica, sans-serif;  
`