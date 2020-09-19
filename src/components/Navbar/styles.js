import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

import { fadeIn } from '../../styles/animations'

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #E75F3B;
    &:after{
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
      ${fadeIn({ time: '300ms' })};
    }
  }
`

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
