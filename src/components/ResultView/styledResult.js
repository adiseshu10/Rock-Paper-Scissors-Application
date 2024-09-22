import styled from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`
export const CardsContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayButton = styled.button`
  background-color: white;
  font-family: Bree Serif;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
`

export const ResultStatus = styled.p`
  font-size: 20px;
  color: white;
`

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemText = styled.p`
  color: white;
  font-size: 18px;
`

export const CardImage = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
