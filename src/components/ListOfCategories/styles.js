import styled from 'styled-components'

import { fadeIn, fadeOut } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 30px;
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
  &::-webkit-scrollbar{
    height: 16px;
  }
  &::-webkit-scrollbar-track{
    background: #CFD8DC;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #90A4AE;
    border-radius: 25px;
    border: 4px solid #CFD8DC;
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
  &.fixed{
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,.3);
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    justify-content: flex-start;
    ${props => props.showOrHide ? fadeIn({ time: '350ms' }) : fadeOut({ time: '350ms' })}
    visibility: ${props => props.showOrHide ? 'visible' : 'hidden'};
    transition: visibility 350ms;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
