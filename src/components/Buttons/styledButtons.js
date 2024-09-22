import styled from 'styled-components'

export const ListItem = styled.li`
  width: 40%;
  list-style-type: none;
`

export const Image = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const GameButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`
