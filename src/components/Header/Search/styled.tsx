import styled from "styled-components";
import { breakpoints } from "../NavBar/styled";
const primaryColor = '#E91E63'

interface propsContainerSearch {
    display:boolean
}

export const ContainerSearch   = styled.div<propsContainerSearch>`
    display: none;
      

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 4px;
    display: ${props => props.display?"block":"none"};
  };
  @media (min-width: ${breakpoints.desktop}) {

    display: block;
    
    margin-left: 40px;
    display: ${props => props.display?"none":"block"};
  };
  


`

export const TextSearch = styled.button`
    color:inherit;
    text-decoration:none;
    font-size:15px;
    display:block;
    border-width: 0;
    background-color:inherit;
    transition: background-color 0.5s;
    width:100%;
    text-align: start;
    &:hover{
        background-color:${primaryColor};
        cursor:pointer;
    };
    &&{
        padding:5px
    };

`

export const BotonSearch = styled.button`
    border:none;
    background:inherit;
    cursor:pointer;
    text-decoration:none;
    color:inherit;
    transition: all 0.5s;
    &:hover{
        color:${primaryColor};
        scale:1.2;
        
    };
`
