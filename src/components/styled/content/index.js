import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 50px;
`
export const ContainerFluid = styled.div`
  display: flex;
  padding: 5px 10px;
`
export const Wrap = styled.div`
  @media (max-width: 764px) {
    flex-wrap: wrap;
  }
  display: flex;
  align-items: center;
  width: 100%;
`

export const Card = styled.div`
  display: block;
  padding: 5px;
  border: 1px solid #000;
`
export const CardHeader = styled.div`
  text-align: center;
  padding: 5px;
`
export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
`