import styled from 'styled-components'

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
`

export const Item = styled.li`
  padding: 0 8px;
`
