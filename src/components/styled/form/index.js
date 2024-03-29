import styled from "styled-components";

export const Form = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InputText = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
  background: none;
  ::placeholder{
    color: rgba(255,255,255,.6);
    font-weight: bold;
  }
`
export const Button = styled.button`
  width: 26px;
  height: 26px; 
  padding: 4px;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  color: #457fca;
  align-items: baseline;
`