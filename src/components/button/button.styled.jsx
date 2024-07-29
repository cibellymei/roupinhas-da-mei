import styled from "styled-components";

export const BaseButton = styled.div`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: #7a0025;
    color: rgb(248, 190, 233);
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    margin-top: 20px;
  
    &:hover {
      background-color: rgb(211, 79, 97);
      color: black;
      border: 1px solid black;
    }
`
export const GoogleSignInButton = styled(BaseButton)`

  background-color: #66cbdd;
  color: white;

    &:hover {
        background-color: #3acae4;
        border: none;
      }
`

export const InvertedButton = styled(BaseButton)`
    background-color: rgb(211, 79, 97);
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: #7a0025;
        color: white;
        border: none;
      }
`